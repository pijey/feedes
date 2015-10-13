import Ember from "ember";
const { Component, computed, inject } = Ember;

export default Component.extend({
  tagName: 'li',
  classNames: [ 'dropdown' ],
  i18n: inject.service(),
  current: function(){
    const i18n = this.get('i18n');
    return { 
      id: this.get("i18n.locale"), 
      text: i18n.t('language-select.language.' + this.get("i18n.locale")),
      img: "assets/img/flags/Flag of " + i18n.t('language-select.country.' + this.get("i18n.locale")) + ".png"
    };
  }.property("i18n.locale"),
  locales: computed('i18n.locales', function() {
    const i18n = this.get('i18n');
    return this.get('i18n.locales').map(function (loc) {
      return { 
        id: loc, 
        text: i18n.t('language-select.language.' + loc),
        img: "assets/img/flags/Flag of " + i18n.t('language-select.country.' + loc) + ".png"
      };
    });
  }),

  // It would be nice to do this with `{{action "setLocale" on="change"}}`
  // in the template, but the template doesn't include the component's own
  // tag yet. See https://github.com/emberjs/rfcs/pull/60
  actions: {
    change: function(locale) {
      this.get('i18n').set('locale', locale);
    }
  }
});