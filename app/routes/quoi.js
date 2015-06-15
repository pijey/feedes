import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Composition",
	model: function() {
	    return this.store.find('produit', 1);
	},
	setupController: function (controller, model) {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Composition',
	      	'twitter:description': "Nous voudrions bien savoir de quoi sont composés les produits que nous consommons. Oui mais voilà, les étiquettes n'affichent jamais ce qu'il faut, soit trop d'informations, soit pas assez...",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/quoi',
	      	
	      	'description': "Nous voudrions bien savoir de quoi sont composés les produits que nous consommons. Oui mais voilà, les étiquettes n'affichent jamais ce qu'il faut, soit trop d'informations, soit pas assez...",

	      	'og:title': 'Feedes, la transparence alimentaire - Composition',
	      	'og:description': "Nous voudrions bien savoir de quoi sont composés les produits que nous consommons. Oui mais voilà, les étiquettes n'affichent jamais ce qu'il faut, soit trop d'informations, soit pas assez...",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/quoi'
	    });
		this._super(controller, model);
	    controller.set('model', model);
  	}
});
