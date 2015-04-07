import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    this.controllerFor("application").clearActive();
    this.controllerFor("application").set('classCombien', "active");
    return this.store.find('produit', 1);
  }
});
