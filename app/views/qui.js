import Ember from 'ember';

export default Ember.View.extend({
	toolTips: function(){
		Ember.$('[data-toggle="popover"]').popover({container: 'body'});
	}.on('didInsertElement'),
	tour: function(){
		if(!this.get('controller.hideIntro')){
			var intro = introJs()
				.setOption("showStepNumbers", false)
				.setOption("skipLabel", "Passer l'intro")
				.setOption("nextLabel", "Suivant")
				.setOption("prevLabel", "Précédent")
				.setOption("doneLabel", "J'ai tout compris !")
				.setOption("tooltipClass", "text-justify")
				.setOption("disableInteraction", false)
				.start();
				var that = this;
			intro.oncomplete(function() {
			  that.set('controller.hideIntro', true);
			});
			intro.onexit(function() {
			  that.set('controller.hideIntro', true);
			});
		}
	}.on('didInsertElement')
});
