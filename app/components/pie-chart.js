import Ember from "ember";

export default Ember.Component.extend({
  classNames: 'pie-chart',
  dataProvider: null,
  colors: null,
  valueField: null,
  titleField: null,
  didInsertElement: function() {
    AmCharts.makeChart("pieChart", {
      "type": "pie",
      "theme": "none",
      "colors": this.colors,
      "dataProvider": this.dataProvider,
      "valueField": this.valueField,
      "titleField": this.titleField,
      "radius": 110,
      "marginTop": 0,
      "marginBottom": 0,
      "labelsEnabled": false,
      "responsive": {
          "enabled": false
        }
    });
  }
});