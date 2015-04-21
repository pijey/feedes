import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		pauseCarousel: function(){
			Ember.$('.carousel').carousel('pause');
		},
		displaySubscriptionForm: function(){
			Ember.$('.keep-me-posted').toggleClass('hidden');
			Ember.$('.subscribe').toggleClass('hidden');
		},
		subscribe: function(){
			Ember.$.post('/sendMail.php', {email: "", liame: this.get('email'),  name: this.get('email'),  message: "Tenez-moi au courant !"})
			.done(function(data) {
				if(Ember.$(data).is("#error")){
					Ember.$('.subscribe').addClass('has-error');
					Ember.$('.subscribe').removeClass('btn-default').addClass('btn-danger');
				} else {
					Ember.$('.subscribe').addClass('hidden');
					Ember.$('.keep-me-posted').html('Je serai informé !');
					Ember.$('.keep-me-posted').removeClass('btn-default');
					Ember.$('.keep-me-posted').addClass('btn-success');
					Ember.$('.keep-me-posted').attr('disabled', 'disabled');
					Ember.$('.keep-me-posted').removeClass('hidden');
					Ember.$('.carousel').carousel('cycle');
				}
			});
			
		}
	}
});
