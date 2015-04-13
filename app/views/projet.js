import Ember from 'ember';

export default Ember.View.extend({
   	activateAffix: function(){
   		Ember.$('#myAffix').affix();
       	Ember.$('body').scrollspy({ target: '#affixDiv' });
   	}.on('didInsertElement')
});
