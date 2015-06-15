import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "A propos",
	setupController: function () {
	    this.get('meta').update({
	    	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - A propos',
	      	'twitter:description': "La plate-forme web permettant aux acteurs du secteur agro-alimentaire d'informer le grand public de manière précise et transparente sur l'origine, la fabrication et la distribution des produits alimentaires qu'ils proposent",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/a-propos',
	      	
	      	'description': "La plate-forme web permettant aux acteurs du secteur agro-alimentaire d'informer le grand public de manière précise et transparente sur l'origine, la fabrication et la distribution des produits alimentaires qu'ils proposent",

	      	'og:title': 'Feedes, la transparence alimentaire - A propos',
	      	'og:description': "La plate-forme web permettant aux acteurs du secteur agro-alimentaire d'informer le grand public de manière précise et transparente sur l'origine, la fabrication et la distribution des produits alimentaires qu'ils proposent",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/a-propos'
	    });
  	}
});