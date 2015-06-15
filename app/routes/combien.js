import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Prix",
	model: function() {
    	return this.store.find('produit', 1);
  	},
	setupController: function (controller, model) {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Prix',
	      	'twitter:description': "Le prix est un critère d'achat très important pour la majorité d'entre nous. Mais que payons-nous vraiment ? Ou plutôt qui ? Bien que tabou, la transparence du prix de vente est importante pour rétablir la confiance.",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/combien',
	      	
	      	'description': "Le prix est un critère d'achat très important pour la majorité d'entre nous. Mais que payons-nous vraiment ? Ou plutôt qui ? Bien que tabou, la transparence du prix de vente est importante pour rétablir la confiance.",

	      	'og:title': 'Feedes, la transparence alimentaire - Prix',
	      	'og:description': "Le prix est un critère d'achat très important pour la majorité d'entre nous. Mais que payons-nous vraiment ? Ou plutôt qui ? Bien que tabou, la transparence du prix de vente est importante pour rétablir la confiance.",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/combien'
	    });
		this._super(controller, model);
	    controller.set('model', model);
  	}
});
