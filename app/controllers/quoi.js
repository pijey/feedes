import Ember from 'ember';

export default Ember.Controller.extend({
	infosNutritionnelles: null,
	apportsRecommande: false,
	showPanelClass: "",
	actions: {
		parPortion: function(){
			this.set('infosNutritionnelles', this.get('model'));
			this.set('apportsRecommande', false);
			Ember.$("#infosNutritionnellesBtnLabel").html("Par "+ this.get('model.unite_portion') +" ("+ this.get('model.poids_portion') + " " + this.get('model.unite_conditionnement') +")");
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
				unite_conditionnement: '%'
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
				unite_conditionnement: 'g'
			});
			Ember.$("#infosNutritionnellesBtnLabel").html("Pour le conditionnement");
		},
		pourApportsNutritionnels: function(){
			this.set('apportsRecommande', true);
			Ember.$("#infosNutritionnellesBtnLabel").html("Apports nutritionnels");
		},
		closePanel: function(){
			this.set('showPanelClass', "hidden");
		},
	},
	steps: Ember.computed(function(){
	    return [
	      {
	        element: Ember.$('#quoiTitle'),
	        intro: 'Coucou!'
	      }
	    ];
  	})
});
