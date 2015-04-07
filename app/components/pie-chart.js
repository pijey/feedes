import Ember from "ember";

export default Ember.Component.extend({
  classNames: 'pie-chart',
  theme: 'none',
  radius: 110,
  marginTop: 0,
  marginBottom: 0,
  dataProvider: null,
  colors: null,
  valueField: null,
  titleField: null,
  labelsEnabled: null,
  responsive: false,
  didInsertElement: function() {
    AmCharts.makeChart("pieChart", {
      "type": "pie",
      "theme": this.theme,
      "colors": this.colors,
      "dataProvider": this.dataProvider,
      "valueField": this.valueField,
      "titleField": this.titleField,
      "radius": this.radius,
      "marginTop": this.marginTop,
      "marginBottom": this.marginBottom,
      "labelsEnabled": this.labelsEnabled,
      "responsive": {
          "enabled": this.responsive
      }
    });
  }
});