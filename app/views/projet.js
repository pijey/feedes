import Ember from 'ember';

export default Ember.View.extend({
	activateAffix: function(){
		Ember.$('#myAffix').affix({
		  offset: {
		    top: 60
		  }
		});
		//Ember.$('#projetDiv').scrollspy({ target: '#affixDiv' });
	}.on('didInsertElement')
});
