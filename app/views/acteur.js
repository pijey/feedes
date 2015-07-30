import Ember from 'ember';
import Osm from 'npm:osm';

export default Ember.View.extend({
	initWidgets: function(){

		// show a map of a fixed position 
		var map = Osm().radius(0.008).position(this.get('controller.model.latitude'), this.get('controller.model.longitude'));
		Ember.$("#map").html(map.show());
		Ember.$("#map > iframe").attr("width", "260");
		 
	}.on('didInsertElement')
});
