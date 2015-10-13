import Ember from 'ember';

export default Ember.View.extend({
	i18n: Ember.inject.service(),
	didInitAttrs() {
	  this.get('i18n');
	},
	actions:{
		updatePopup: function(){
			if(Ember.$('#switch').is(":visible")){
				Ember.$('#switch').popover({
					html:true,
				});
				Ember.$('#switch').popover('show');
			}
		}
	},
	didInsertElement: function(){
		this.send("updatePopup");
	}.on("didInsertElement"),
	languageChange: function(){
		Ember.run.scheduleOnce( 'afterRender', this, function() {
		    this.send("updatePopup");
		}) ;
		
	}.observes("i18n.locale")
});
