import Ember from 'ember';

export default Ember.Controller.extend({
	email: null,
	liame: null,
	name: null,
	message: null,
	response: null,
	error: false,
	actions:{
		sendMessage: function(){
			var that = this;
			Ember.$.post('/sendMail.php', {email: this.get('email'), liame: this.get('liame'),  name: this.get('name'),  message: this.get('message')})
			.done(function(data) {
				if(Ember.$(data).is("#error")){
					that.set("error", true);
				} else {
					that.set("error", false);
				}
				that.set("response", data);
			});
		}
	}
});
