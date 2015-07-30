import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home", {path: "/"});
  this.route("qui");
  this.route("quoi");
  this.route("ou");
  this.route("comment");
  this.route("combien");
  this.route('sondage');
  this.route('a-propos');
  this.route('projet');
  this.route('contact');
  this.route('posts');
  this.route('post', {path: "/post/:md_file_url"});
  this.route('fruits-legumes', {path: "/fruits-legumes/:id"});
  this.route('acteur', {path: "/acteur/:id"});
  this.route('viandes', {path: "/viandes/:id"});
});

export default Router;
