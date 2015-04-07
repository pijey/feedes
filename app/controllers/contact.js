import Ember from 'ember';

export default Ember.Controller.extend({
	email: null,
	vrai_email: null,
	name: null,
	message: null,
	response: null,
	error: false,
	actions:{
		sendMessage: function(){
			var that = this;
			Ember.$.post('/feedes_server/sendMail.php', {email: this.get('email'), vrai_email: this.get('vrai_email'),  name: this.get('name'),  message: this.get('message')})
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
