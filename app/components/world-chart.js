import Ember from "ember";

export default Ember.Component.extend({
  classNames: 'world-chart',
  dataProvider: null,
  theme: "none",
  fontSize: 15,
  didInsertElement: function() {
    
    this.set('parentView.controller.kmsTotal', 20500.5);
    this.set('parentView.controller.kms', 812.7);
    this.set('parentView.controller.label', "Farine et gluten de blé");

    var map = AmCharts.makeChart("chartdiv", {
      type: "map",
      theme: this.theme,
      fontSize: this.fontSize,
      fontFamily: "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
      pathToImages: "http://www.amcharts.com/lib/3/images/",

      dataProvider: this.dataProvider,

      areasSettings: {
        unlistedAreasColor: "#ecf0f1"
      },

      imagesSettings: {
        color: "#2C3E50",
        rollOverColor: "#2C3E50",
        selectedColor: "#18bc9c"
      },

      linesSettings: {
        color: "#2C3E50",
        alpha: 0.4
      },

      zoomControl:{
        buttonFillColor:"#2C3E50"
      },

      backgroundZoomsToTop: true,
      linesAboveImages: true,
      "responsive": {
          "enabled": false
      }
    });

    var that = this;

    map.addListener("clickMapObject", function (event) {
        if(event.mapObject.label === "Sel"){
          that.set('parentView.controller.label', event.mapObject.label);
          that.set('parentView.controller.kms', 240.1);
        } else if(event.mapObject.label === "Farine et gluten de blé"){
          that.set('parentView.controller.kms', 812.7);
          that.set('parentView.controller.label', event.mapObject.label);
        } else if(event.mapObject.label === "Huile de colza"){
          that.set('parentView.controller.kms', 7475.3);
          that.set('parentView.controller.label', event.mapObject.label);
        } else if(event.mapObject.label === "Sucre roux de canne"){
          that.set('parentView.controller.kms', 9153.1);
          that.set('parentView.controller.label', event.mapObject.label);
        } else if(event.mapObject.label === "Vinaigre de cidre"){
          that.set('parentView.controller.kms', 1256.2);
          that.set('parentView.controller.label', event.mapObject.label);
        } else {
          that.set('parentView.controller.label', null);
          that.set('parentView.controller.kms', 20500.5);
        }
    });

  }
});