import Ember from 'ember';

export default Ember.Route.extend({
	model: function(queryParams){
		return this.store.find('post', queryParams.md_file_url);
	},
	afterModel: function(model, transition) {
		transition.then(function(){
			Ember.$('meta[name="twitter:url"]').attr('content', window.location.href);
			Ember.$('meta[name="og:url"]').attr('content', window.location.href);
		});
        
        if(model.get('title')){
        	Ember.$('meta[name="twitter:title"]').attr('content', model.get('title'));
        	Ember.$('meta[name="og:title"]').attr('content', model.get('title'));
        }
        if(model.get('description')){
        	Ember.$('meta[name="twitter:description"]').attr('content', model.get('description'));
        	Ember.$('meta[name="og:description"]').attr('content', model.get('description'));
        }
        if(model.get('image')){
        	Ember.$('meta[name="twitter:image"]').attr('content', model.get('image'));
        	Ember.$('meta[name="og:image"]').attr('content', model.get('image'));
        }
        
    }
	
});
