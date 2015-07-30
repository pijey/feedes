import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, options) {
	return value.replace(new RegExp(" ", 'g'), "_");
});