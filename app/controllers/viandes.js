import Ember from 'ember';

export default Ember.Controller.extend({
	infosNutritionnelles: null,
	refreshChart:false,
	actions: {
		parPortion: function(){
			this.set('infosNutritionnelles', this.get('model'));
			this.set('apportsRecommande', false);
			Ember.$("#infosNutritionnellesBtnLabel").html("Par "+ this.get('model.unite_portion') +" ("+ this.get('model.poids_portion') + this.get('model.unite_nutrition') +")");
		},
		pour100g: function(){
			var poidsParPortion = this.get('model.conditionnement')/this.get('model.nombre_portions');
			this.set('apportsRecommande', false);
			this.set('infosNutritionnelles', {
				energie_portion: Math.round(this.get('model.energie_portion') * 10000 / poidsParPortion)/100,
				matieres_grasses: Math.round(this.get('model.matieres_grasses') * 10000 / poidsParPortion)/100,
				matieres_grasses_saturees: Math.round(this.get('model.matieres_grasses_saturees') * 10000 / poidsParPortion)/100,
				glucides: Math.round(this.get('model.glucides') * 10000 / poidsParPortion)/100,
				glucides_dont_sucres: Math.round(this.get('model.glucides_dont_sucres') * 10000 / poidsParPortion)/100,
				fibres: Math.round(this.get('model.fibres') * 10000 / poidsParPortion)/100,
				proteines: Math.round(this.get('model.proteines') * 10000 / poidsParPortion)/100,
				sel: Math.round(this.get('model.sel') * 10000 / poidsParPortion)/100,
				unite_nutrition: '%'
			});
			Ember.$("#infosNutritionnellesBtnLabel").html("Pour 100g");
		},
		pourConditionnement: function(){
			var nbPortions = this.get('model.nombre_portions');
			this.set('apportsRecommande', false);
			this.set('infosNutritionnelles', {
				energie_portion: Math.round(this.get('model.energie_portion') * 100 * nbPortions)/100,
				matieres_grasses: Math.round(this.get('model.matieres_grasses') * 100 * nbPortions)/100,
				matieres_grasses_saturees: Math.round(this.get('model.matieres_grasses_saturees') * 100 * nbPortions)/100,
				glucides: Math.round(this.get('model.glucides') * 100 * nbPortions)/100,
				glucides_dont_sucres: Math.round(this.get('model.glucides_dont_sucres') * 100 * nbPortions)/100,
				fibres: Math.round(this.get('model.fibres') * 100 * nbPortions)/100,
				proteines: Math.round(this.get('model.proteines') * 100 * nbPortions)/100,
				sel: Math.round(this.get('model.sel') * 100 * nbPortions)/100,
				unite_nutrition: 'g'
			});
			Ember.$("#infosNutritionnellesBtnLabel").html("Pour le conditionnement");
		},
		pourApportsNutritionnels: function(){
			this.set('apportsRecommande', true);
			Ember.$("#infosNutritionnellesBtnLabel").html("Apports nutritionnels");
		}
	},
  	dataProvider: function(){
  		var distances = [];
  		var dataProvider = {};

  		if(this.get('model.origine_macro') === 'France'){
  			dataProvider.map = "franceDepartmentsHigh";
  		}
  		else {
  			dataProvider.map = "worldLow";	
  		}
  		dataProvider.departements = [];
  		dataProvider.areas = [];
  		dataProvider.lines = [];
  		dataProvider.images = [];
  		var acteurs = this.get("model.acteurs");
  		var etapes = this.get("model.etapes");
		var previousActeur = null;
		acteurs.forEach(function(acteur){
			if(etapes) {
				acteur.set("etapes", etapes.filter(function(value) {
	  				return value.acteur === parseInt(acteur.id);
				}));
			}
			
			if(previousActeur !== null){
				var longitudePrev = previousActeur.get("longitude");
				var latitudePrev = previousActeur.get("latitude");
				var longitudeCurr = acteur.get("longitude");
				var latitudeCurr = acteur.get("latitude");

				var R = 6371; // km
				var lat1Rad = latitudePrev * Math.PI / 180;
				var lat2Rad = latitudeCurr * Math.PI / 180;
				var deltaLatRad = (latitudeCurr-latitudePrev) * Math.PI / 180;
				var deltaLonRad = (longitudeCurr-longitudePrev) * Math.PI / 180;

				var a = Math.sin(deltaLatRad/2) * Math.sin(deltaLatRad/2) +
				        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
				        Math.sin(deltaLonRad/2) * Math.sin(deltaLonRad/2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

				var d = Math.round(R * c);

				
				previousActeur.set('distance', d);
				dataProvider.lines.push({
					latitudes:[previousActeur.get("latitude"), acteur.get("latitude")],
					longitudes: [previousActeur.get("longitude"), acteur.get("longitude")],
					balloonText: d + " km"
				});
				distances.push(previousActeur);
			}
			previousActeur = acteur;

			var color;
			var img;
			var height;
			var width;
			if(acteur.get("role") === "producteur"){
				color = "#21A9E1";
				height = 25;
		      	width = 25;
				img = "assets/img/glyphicons-610-tractor.png";
			}
			else if(acteur.get("role") === "intermediaire"){
				color = "#00A651";
				height = 27;
		      	width = 34;
				img = "assets/img/glyphicons-138-cogwheels.png";
			}
			else if(acteur.get("role") === "distributeur"){
				color = "#EE4749";
				height = 23;
		      	width = 26;
				img = "assets/img/glyphicons-203-shopping-cart.png";
			}

			//areas
			if(!dataProvider.departements.contains(acteur.get("departement"))){
				dataProvider.areas.push({
					title:acteur.get("departementTexte"),
					id:"FR-" + acteur.get("departement"),
					color: color
				});
				dataProvider.departements.push(acteur.get("departement"));
			}
			

			//images
			dataProvider.images.push({
				id:acteur.get("role"),
				imageURL: img,
				height: height,
				width: width,
				title: acteur.get("raisonSociale") + " - " + acteur.get("activite"),
				latitude: acteur.get("latitude"),
				longitude: acteur.get("longitude")
			});
		});
		previousActeur.set('distance', "2");
		distances.push(previousActeur);
		return {
			chartDataProvider : dataProvider,
			distances : distances
		};
  		
  	}.property("model.acteurs.[]"),
  	priceChartData: function(){
   		var dataProvider = this.get('model.historique_prix');
      
      	var graphs = [{
          "balloonText": "<img src='assets/img/glyphicons-610-tractor.png'/> <span style='font-size:16px;'><b>Eleveurs : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Eleveurs",
          "valueField": "eleveurs"
      	}, {
          "balloonText": "<img src='assets/img/glyphicons-138-cogwheels.png'/> <span style='font-size:16px;'><b>Transformateurs : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Transformateurs",
          "valueField": "transformateurs"
      	},{
          "balloonText": "<img src='assets/img/glyphicons-203-shopping-cart.png'/> <span style='font-size:16px;'><b>Distributeurs : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Distributeurs",
          "valueField": "distributeurs"
      	},{
          "balloonText": "<img src='assets/img/glyphicons-4-user.png'/> <span style='font-size:16px;'><b>Autres : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Autres intermédiaires",
          "valueField": "autres_intermediaires"
      }];

      return {
      	dataProvider:dataProvider,
      	graphs:graphs
      };
   	}.property("model.historique_prix")
});
