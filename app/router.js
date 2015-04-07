import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home", {path: "/"});
  this.route("qui", {path: "/qui"});
  this.route("quoi", {path: "/quoi"});
  this.route("ou", {path: "/ou"});
  this.route("comment", {path: "/comment"});
  this.route("combien", {path: "/combien"});
  this.route('sondage');
  this.route('a-propos');
  this.route('projet');
  this.route('contact');
});

export default Router;
