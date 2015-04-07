import Ember from "ember";

export default Ember.Component.extend({
  classNames: 'line-chart',
  didInsertElement: function() {
    AmCharts.makeChart("lineChart", {
      "type": "serial",
      "theme": "none",
      "titles": [{
          "text": "Répartition du prix de vente",
          "size": 19
      }],    
      "pathToImages": "http://www.amcharts.com/lib/3/images/",
      "legend": {
          "align": "center",
          "equalWidths": true,
          "valueAlign": "left",
          "fontSize": 16,
          "valueText": "[[value]] € ([[percents]]%)",
          "valueWidth": 100
      },
      "dataProvider": [{
          "year": "2009",
          "producteurs": 0.92,
          "transformateurs": 1.03,
          "distributeurs": 0.52,
          "autres_intermediaires": 0.11
      }, {
          "year": "2010",
          "producteurs": 0.91,
          "transformateurs": 1.03,
          "distributeurs": 0.54,
          "autres_intermediaires": 0.10
      }, {
          "year": "2011",
          "producteurs": 0.93,
          "transformateurs": 1.03,
          "distributeurs": 0.54,
          "autres_intermediaires": 0.1
      }, {
          "year": "2012",
          "producteurs": 0.88,
          "transformateurs": 1.03,
          "distributeurs": 0.56,
          "autres_intermediaires": 0.1
      }, {
          "year": "2013",
          "producteurs": 0.86,
          "transformateurs": 1.03,
          "distributeurs": 0.59,
          "autres_intermediaires": 0.1
      }],
      "valueAxes": [{
          "stackType": "100%",
          "gridAlpha": 0.07,
          "position": "left",
          "title": "euros"
      }],
      "graphs": [{
          "balloonText": "<span style='font-size:16px; color:#000000;'><b>Producteurs : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Producteurs",
          "valueField": "producteurs"
      }, {
          "balloonText": "<span style='font-size:16px; color:#000000;'><b>Transformateurs : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Transformateurs",
          "valueField": "transformateurs"
      },{
          "balloonText": "<span style='font-size:16px; color:#000000;'><b>Distributeurs : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Distributeurs",
          "valueField": "distributeurs"
      },{
          "balloonText": "<span style='font-size:16px; color:#000000;'><b>Autres intermédiaires : [[value]] €</b></span>",
          "fillAlphas": 0.5,
          "lineAlpha": 0.5,
          "title": "Autres intermédiaires",
          "valueField": "autres_intermediaires"
      }],
      "plotAreaBorderAlpha": 0,
      "marginLeft": 0,
      "marginBottom": 0,
      "chartCursor": {
          "cursorAlpha": 0,
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