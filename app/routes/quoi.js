import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	    this.controllerFor("application").clearActive();
	    this.controllerFor("application").set('classQuoi', "active");
	    return this.store.find('produit', 1);
	},
	setupController: function (controller, model) {
	    // Call _super for default behavior
	    this._super(controller, model);
	    // Implement your custom setup after
	    controller.set('infosNutritionnelles', model);
	 }
});
