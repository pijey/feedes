import Ember from 'ember';

export default Ember.View.extend({
   	initWidgets: function(){
   		var value = this.get('controller.model.transparence');
   		Ember.$('#circle-transparency').circleProgress({
	        value: value/100,
	        size: 80,
	        startAngle:-Math.PI/2,
	        fill: {
	            gradient: ["#2C3E50", "#18BC9C"]
	        }

    	}).on('circle-animation-progress', function(event, progress, stepValue) {
		    Ember.$(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
		});
		this.get("controller").send("parPortion");
   	}.on('didInsertElement')
});
