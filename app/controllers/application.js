import Ember from "ember";

export default Ember.ObjectController.extend({
  productId : "",
  classQui : "hidden",
  classQuoi : "hidden",
  classOu : "hidden",
  classQuand : "hidden",
  classComment : "hidden",
  classCombien : "hidden",
  classPourquoi : "hidden",
  actions: {
    search: function(){
      if(this.get('productId').indexOf("Harrys") > -1){
        this.transitionToRoute('quoi',2);
      }
      else {
        this.transitionToRoute('quoi',1);
      }
    }
  },
  clearActive: function(){
    this.set('classQui', "hidden");
    this.set('classQuoi', "hidden");
    this.set('classOu', "hidden");
    this.set('classQuand', "hidden");
    this.set('classComment', "hidden");
    this.set('classCombien', "hidden");
    this.set('classPourquoi', "hidden");
  }
});