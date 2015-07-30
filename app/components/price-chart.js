import Ember from "ember";

export default Ember.Component.extend({
  classNames: 'price-chart',
  colors: null,
  dataProvider:null,
  chart: null,
  refresh:false,
  refreshChart: function(){
    if(this.refresh === true) {
      this.chart.invalidateSize();
    }
  }.observes('refresh'),
  didInsertElement: function() {
    this.chart = AmCharts.makeChart("priceChart", {
      "type": "serial",
      "colors": ["#21A9E1","#00A651","#EE4749","#737881"],
      "theme": "none",   
      "fontFamily": "Lato",
      "pathToImages": "http://www.amcharts.com/lib/3/images/",
      "legend": {
          "align": "center",
          "equalWidths": true,
          "valueAlign": "left",
          "fontSize": 16,
          "valueText": "[[value]] € ([[percents]]%)",
          "valueWidth": 100
      },
      "dataProvider": this.dataProvider.dataProvider,
      "graphs": this.dataProvider.graphs,
      "valueAxes": [{
          "stackType": "regular",
          "gridAlpha": 0.07,
          "position": "left",
          "title": "euros",
          "totalText": "[[total]] €"
      }],
      "plotAreaBorderAlpha": 0,
      "marginLeft": 0,
      "marginBottom": 0,
      "chartCursor": {
          "cursorAlpha": 0,
          "categoryBalloonColor": "#2C3E50",
          "zoomable": false
      },
      "categoryField": "year",
      "categoryAxis": {
          "startOnAxis": true,
          "axisColor": "#DADADA",
          "gridAlpha": 0.07
      }
    });  
  }
});