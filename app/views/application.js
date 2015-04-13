import Ember from 'ember';
export default Ember.View.extend({
	fixMenu: function(){
		Ember.$('.nav a').not('.dropdown-toggle').on('click', function(){
		    Ember.$(".navbar-toggle").click(); //bootstrap 3.x by Richard
		});
	//Ember.$('#projetDiv').scrollspy({ target: '#affixDiv' });
	}.on('didInsertElement')
});