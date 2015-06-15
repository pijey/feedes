import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Fabrication",
	model: function() {
	 	return this.store.find('produit', 1);
	},
	setupController: function (controller, model) {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Fabrication',
	      	'twitter:description': "Plus nous achetons de produits transformés, moins nous avons de maîtrise sur leur fabrication. Connaître les étapes d'élaboration peut permettre de reprendre la main et d'être plus exigeant.",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/comment',
	      	
	      	'description': "Plus nous achetons de produits transformés, moins nous avons de maîtrise sur leur fabrication. Connaître les étapes d'élaboration peut permettre de reprendre la main et d'être plus exigeant.",

	      	'og:title': 'Feedes, la transparence alimentaire - Fabrication',
	      	'og:description': "Plus nous achetons de produits transformés, moins nous avons de maîtrise sur leur fabrication. Connaître les étapes d'élaboration peut permettre de reprendre la main et d'être plus exigeant.",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/comment'
	    });
		this._super(controller, model);
	    controller.set('model', model);
  	}
});
