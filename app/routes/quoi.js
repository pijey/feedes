import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	    return this.store.find('produit', 1);
	},
	setupController: function (controller, model) {
	    this._super(controller, model);
	    controller.set('infosNutritionnelles', model);
	 }
});
