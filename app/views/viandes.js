import Ember from 'ember';

export default Ember.View.extend({
   	initWidgets: function(){
   		var value = this.get('controller.model.transparence');
   		Ember.$('#circle-transparency').circleProgress({
	        value: value/100,
	        size: 80,
	        startAngle:-Math.PI/2,
	        fill: {
	            gradient: ["#2C3E50", "#18BC9C"], gradientAngle: -Math.PI/2
	        }

    	}).on('circle-animation-progress', function(event, progress, stepValue) {
		    Ember.$(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
		});
    	var that = this;
   		Ember.$('#circle-price-prod').circleProgress({
	        value: that.get('controller.model.prix_producteur')/that.get('controller.model.prix_conditionnement'),
	        size: 80,
	        startAngle:-Math.PI/2,
	        fill: { gradient: ["#2C3E50", "#18BC9C"], gradientAngle: -Math.PI/2 }
	        /*fill: {
	            gradient: ["#2C3E50", "#18BC9C"]
	        }*/

    	}).on('circle-animation-progress', function(event, progress, stepValue) {
		    Ember.$(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
		});



    	var note_nutritionnelle = this.get('controller.model.note_nutritionnelle');
    	var color;
		switch(note_nutritionnelle){
			case "A":
			color = "#0F0";
			break;

			case "B":
			color = "#FF0";
			break;

			case "C":
			color = "#FF6701";
			break;

			case "D":
			color = "#FF0180";
			break;

			case "E":
			color = "#F00";
			break;
		}

		Ember.$('#prixModal').on('shown.bs.modal', function(){
			that.set('controller.refreshChart', true);
		});

		Ember.$('[data-toggle="tooltip"]').tooltip();

		Ember.$('.variation-pourcent').attr('style', 'width:'+ this.get('controller.model.part_producteur') +'%');

   		Ember.$('#circle-nutrition').circleProgress({
	        value: 1,
	        size: 80,
	        animation: false,
	        fill: {
	        	color: color
	        }

    	});

    	Ember.$('#circle-intermed').circleProgress({
	        value: 1,
	        size: 80,
	        animation: false,
	        fill: {
	        	color: "#3498DB"
	        }

    	});
		this.get("controller").send("parPortion");
   	}.on('didInsertElement'),
   	
});
