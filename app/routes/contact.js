import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Contact",
	setupController: function () {
		this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Contact',
	      	'twitter:description': "Ce projet vous intéresse en tant que consomm'acteur ou en tant qu'acteur agro-alimentaire ? Vous avez des remarques/conseil ou vous voulez participer à ce projet ? Utilisez le formulaire de contact !",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/contact',
	      	
	      	'description': "Ce projet vous intéresse en tant que consomm'acteur ou en tant qu'acteur agro-alimentaire ? Vous avez des remarques/conseil ou vous voulez participer à ce projet ? Utilisez le formulaire de contact !",

	      	'og:title': 'Feedes, la transparence alimentaire - Contact',
	      	'og:description': "Ce projet vous intéresse en tant que consomm'acteur ou en tant qu'acteur agro-alimentaire ? Vous avez des remarques/conseil ou vous voulez participer à ce projet ? Utilisez le formulaire de contact !",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/contact'
	    });
	}
});