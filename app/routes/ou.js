import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Origine",
	model: function() {
	  return this.store.find('produit', 1);
	},
	setupController: function (controller, model) {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Origine',
	      	'twitter:description': "Une des informations les plus importantes, et sur laquelle nous voulons majoritairement plus de précisions. Connaître l'origine exacte des produits présents dans notre assiette permet de se réapproprier l'acte de se nourrir. Bien qu'en progrès, les informations à notre disposition sont insuffisantes.",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/ou',
	      	
	      	'description': "Une des informations les plus importantes, et sur laquelle nous voulons majoritairement plus de précisions. Connaître l'origine exacte des produits présents dans notre assiette permet de se réapproprier l'acte de se nourrir. Bien qu'en progrès, les informations à notre disposition sont insuffisantes.",

	      	'og:title': 'Feedes, la transparence alimentaire - Origine',
	      	'og:description': "Une des informations les plus importantes, et sur laquelle nous voulons majoritairement plus de précisions. Connaître l'origine exacte des produits présents dans notre assiette permet de se réapproprier l'acte de se nourrir. Bien qu'en progrès, les informations à notre disposition sont insuffisantes.",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/ou'
	    });
		this._super(controller, model);
	    controller.set('model', model);
  	}
});
