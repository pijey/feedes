import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Le projet",
	setupController: function () {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Le projet',
	      	'twitter:description': "Une plate-forme web (accessible également sur mobile ou tablette) permettant aux acteurs du secteur agro-alimentaire (producteurs, distributeurs, restaurateurs, marques alimentaires, grandes surfaces et autres) d'informer le grand public de manière précise et transparente sur l'origine, la fabrication et la distribution des produits alimentaires qu'ils proposent",
	      	'twitter:image': 'http://feedes.fr/assets/img/empowerment.jpg',
	      	'twitter:url': 'http://feedes.fr/projet',
	      	
	      	'description': "Une plate-forme web (accessible également sur mobile ou tablette) permettant aux acteurs du secteur agro-alimentaire (producteurs, distributeurs, restaurateurs, marques alimentaires, grandes surfaces et autres) d'informer le grand public de manière précise et transparente sur l'origine, la fabrication et la distribution des produits alimentaires qu'ils proposent",

	      	'og:title': 'Feedes, la transparence alimentaire - Le projet',
	      	'og:description': "Une plate-forme web (accessible également sur mobile ou tablette) permettant aux acteurs du secteur agro-alimentaire (producteurs, distributeurs, restaurateurs, marques alimentaires, grandes surfaces et autres) d'informer le grand public de manière précise et transparente sur l'origine, la fabrication et la distribution des produits alimentaires qu'ils proposent",
	      	'og:image': 'http://feedes.fr/assets/img/empowerment.jpg',
	      	'og:url': 'http://feedes.fr/projet'
	    });
  	}
});