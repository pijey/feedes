import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Acteurs",
	model: function() {
    	return this.store.find('produit', 1);
  	},
  	setupController: function (controller, model) {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Acteurs',
	      	'twitter:description': "Nous nourrir en toute confiance implique de connaître l'ensemble de la chaîne d'élaboration du produit : la composition, la provenance et la fabrication mais également les acteurs présents au cours des différentes étapes de fabrication.",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/qui',
	      	
	      	'description': "Nous nourrir en toute confiance implique de connaître l'ensemble de la chaîne d'élaboration du produit : la composition, la provenance et la fabrication mais également les acteurs présents au cours des différentes étapes de fabrication.",

	      	'og:title': 'Feedes, la transparence alimentaire - Acteurs',
	      	'og:description': "Nous nourrir en toute confiance implique de connaître l'ensemble de la chaîne d'élaboration du produit : la composition, la provenance et la fabrication mais également les acteurs présents au cours des différentes étapes de fabrication.",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/qui'
	    });
		this._super(controller, model);
	    controller.set('model', model);
  	}
});
