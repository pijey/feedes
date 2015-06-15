import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Sondage",
	setupController: function () {
	    this.get('meta').update({
	      	'twitter:site': '@FeedesFr',
	      	'twitter:title': 'Feedes, la transparence alimentaire - Sondage',
	      	'twitter:description': "Un sondage pour renseigner vos attentes en termes de quantité et de qualité d'information pour une plate-forme telle que Feedes",
	      	// 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'twitter:url': 'http://feedes.fr/sondage',
	      	
	      	'description': "Un sondage pour renseigner vos attentes en termes de quantité et de qualité d'information pour une plate-forme telle que Feedes",

	      	'og:title': 'Feedes, la transparence alimentaire - Sondage',
	      	'og:description': "Un sondage pour renseigner vos attentes en termes de quantité et de qualité d'information pour une plate-forme telle que Feedes",
	      	// 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
	      	'og:url': 'http://feedes.fr/sondage'
	    });
  	}
});