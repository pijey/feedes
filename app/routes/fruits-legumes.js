import Ember from 'ember';

export default Ember.Route.extend({	
	titleToken: "Fruits et légumes",
	model: function(params) {
	  return this.store.find('produit', params.id);
	},
	afterModel: function() {
	    var store = this.get('store');

	    var promises = [
	      store.find('acteur'),
	      store.find('intrant'),
	    ];

	    return Ember.RSVP.all(promises);
	},
	setupController: function (controller, model) {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Origine',
	      	'twitter:description': "",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/fruits-legumes',
	      	
	      	'description': "",

	      	'og:title': 'Feedes, la transparence alimentaire - Origine',
	      	'og:description': "",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/ou'
	    });
		this._super(controller, model);
	    controller.set('model', model);
  	}
});
