import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		displaySubscriptionForm: function(){
			Ember.$('.carousel').carousel('pause');
			Ember.$('.keep-me-posted').addClass('hidden');
			Ember.$('.subscribe').removeClass('hidden');
			Ember.$('.carousel .item.active .subscribe input').focus();
		},
		callToAction: function(){
			this.send('displaySubscriptionForm');
			Ember.$('html, body').animate({
		        scrollTop: Ember.$('.carousel').offset().top
		    }, 1000);
		    Ember.$('.carousel .item.active .subscribe input').focus();
		    Ember.$('.carousel').carousel('pause');
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
