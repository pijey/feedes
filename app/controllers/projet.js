import Ember from "ember";

export default Ember.ObjectController.extend({
	actions: {
		scrollAffix: function(e){
			Ember.$('html, body').animate({
		        scrollTop: Ember.$(e).offset().top
		    }, 1000);
		}
	}
});