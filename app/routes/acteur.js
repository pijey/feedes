import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Acteur",
	model: function(params) {
	  return this.store.find('acteur', params.id);
	},
	setupController: function (controller, model) {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Acteur',
	      	'twitter:description': "",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': window.location.href,
	      	
	      	'description': "",

	      	'og:title': 'Feedes, la transparence alimentaire - Acteur',
	      	'og:description': "",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': window.location.href
	    });
		this._super(controller, model);
	    controller.set('model', model);
  	}
});
