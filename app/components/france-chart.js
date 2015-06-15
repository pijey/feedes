import Ember from "ember";

export default Ember.Component.extend({
  classNames: 'france-chart',
  dataProvider: null,
  theme: "none",
  fontSize: 15,
  didInsertElement: function() {
    
    AmCharts.makeChart("chartFrance", {
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
        alpha: 0.6,
        dashLength: 6,
        thickness: 4,
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

  }
});