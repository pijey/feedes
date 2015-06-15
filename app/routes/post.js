import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: function(model){
        return model.get('title');
    },
	model: function(queryParams){
		return this.store.find('post', queryParams.md_file_url);
	},
    setupController: function (controller, model) {
        this.get('meta').update({
            'twitter:site': '@FeedesFr',
            'twitter:title': model.get('title'),
            'twitter:description': model.get('description'),
            // 'twitter:image': 'http://feedes.fr/assets/img/trust.jpg',
            'twitter:url': window.location.href,
            
            'description': model.get('description'),

            'og:title': model.get('title'),
            'og:description': model.get('description'),
            // 'og:image': 'http://feedes.fr/assets/img/trust.jpg',
            'og:url': window.location.href
        });
        this._super(controller, model);
        controller.set('model', model);
    }
});
