import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function() {
  var context = arguments[0],
    args = Array.prototype.slice.call(arguments, 1 , -1);

  return function() {
    return context.send.apply(context, args);
  };
});
