import Ember from 'ember';

export default Ember.Component.extend({
	text: null,
	header: null,
	readMore: null,
	didInsertElement: function(){
		var that = this;
		Ember.$.get("posts/" + this.get('mdFile') + ".md", function( data ) {
			that.set('fileContent',data);
			var parts = data.split('---');
			that.set('header', JSON.parse(parts[0]));
			var morePosition = parts[1].indexOf("[MORE]");
			if(that.get('type') === "excerpt" && morePosition > 0){
				that.set('text',parts[1].substr(0, morePosition));
				that.set('readMore', true);
			}
			else {
				that.set('text', parts[1].replace("[MORE]", ""));
			}
			
		});
	}
});
