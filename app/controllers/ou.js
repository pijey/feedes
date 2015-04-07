import Ember from 'ember';

export default Ember.Controller.extend({
	kms: null,
	label: null,
	kmsTotal: null,
	// Pie Chart
	pieChartDataProvider:[
		{
      "Pays": "Allemagne",
      "Pourcentage": 57.4
    }, {
      "Pays": "France",
      "Pourcentage": 24.7
    }, {
      "Pays": "Canada",
      "Pourcentage": 13.4
    }, {
      "Pays": "Brésil",
      "Pourcentage": 3
    }, {
      "Pays": "Tunisie",
      "Pourcentage": 1
    }
  ],
 	pieChartColors:["#3366CC", "#DC3912", "#FF9900", "#990099", "#109618"],
 	pieChartCategories:"Pays",
 	pieChartValues:"Pourcentage",
  
  //World map
  chartDataProvider: {
    map: "worldLow",
    linkToObject: "farine",
    areas: [
    	{
        title: "France",
        id: "FR",
        color: "#DC3912"
      },
      {
        title: "Germany",
        id: "DE",
        color: "#3366CC"
      },
      {
        title: "Canada",
        id: "CA",
        color: "#FF9900"
      },
      {
        title: "Tunisia",
        id: "TN",
        color: "#109618"
      },
      {
        title: "Brazil",
        id: "BR",
        color: "#990099"
      },
    ],
  	images: [
	  	{
	      id: "farine",
	      color: "#2C3E50",
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Münster, Culture et récolte du blé",
	      latitude: 51.960453,
	      longitude: 7.633024,
	      zoomLevel: 15,
	      zoomLongitude: 8.201482, 
	      zoomLatitude: 51.002668,

	      lines: [
	      	{
	          latitudes: [51.960453, 52.374741], 
	          longitudes: [7.633024, 9.730916]
	        }, 
	        {
	          latitudes: [52.374741, 50.114828],
	          longitudes: [9.730916, 8.665403]
	      	}
	      ],

	      images: [
	      	{
	          label: "Farine et gluten de blé",
	          left: 100,
	          top: 15,
	          labelShiftY: 5,
	          color: "#2C3E50",
	          labelColor: "#2C3E50",
	          labelRollOverColor: "#2C3E50",
	          labelFontSize: 20
	        }, 
	        {
	          label: "Huile de colza",
	          left: 106,
	          top: 40,
	          labelColor: "#2C3E50",
	          labelRollOverColor: "#2C3E50",
	          labelFontSize: 15,
	          linkToObject: "huilecolza"
	        }, 
	        {
	          label: "Sucre roux de canne",
	          left: 106,
	          top: 60,
	          labelColor: "#2C3E50",
	          labelRollOverColor: "#2C3E50",
	          labelFontSize: 15,
	          linkToObject: "sucreroux"
	        }, 
	        {
	          label: "Vinaigre de cidre",
	          left: 106,
	          top: 80,
	          labelColor: "#2C3E50",
	          labelRollOverColor: "#2C3E50",
	          labelFontSize: 15,
	          linkToObject: "vinaigrecidre"
	        }, 
	        {
	          label: "Sel",
	          left: 106,
	          top: 100,
	          labelColor: "#2C3E50",
	          labelRollOverColor: "#2C3E50",
	          labelFontSize: 15,
	          linkToObject: "sel"
	        }, 
	        {
	          label: "Transformation",
	          left: 300,
	          top: 15,
	          labelShiftY: 5,
	          color: "#2C3E50",
	          labelColor: "#2C3E50",
	          labelRollOverColor: "#2C3E50",
	          labelFontSize: 20,
	          linkToObject: "transformation"
	        }
	    	]
			},
	  	{
	      id: "huilecolza",
	      color: "#2C3E50",
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "High Prairie, Culture et récolte du colza",
	      latitude: 55.441100,
	      longitude: -116.477850,
	      zoomLevel: 8,
	      zoomLongitude: -116.477850,
	      zoomLatitude: 55.441100,

	      lines: [{
	        latitudes: [55.441100, 53.541395],
	        longitudes: [-116.477850, -113.493949]
	      }, {
	        latitudes: [53.541395, 51.047448],
	        longitudes: [-113.493949, -114.069349]
	      }],

	      images: [{
	        label: "Farine et gluten de blé",
	        left: 106,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "farine"
	      }, {
	        label: "Huile de colza",
	        left: 100,
	        top: 40,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "huilecolza"
	      }, {
	        label: "Sucre roux de canne",
	        left: 106,
	        top: 60,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sucreroux"
	      }, {
	        label: "Vinaigre de cidre",
	        left: 106,
	        top: 80,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "vinaigrecidre"
	      }, {
	        label: "Sel",
	        left: 106,
	        top: 100,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sel"
	      }, {
	        label: "Transformation",
	        left: 300,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "transformation"
	      }]
	  	},
	  	{
	      id: "sucreroux",
	      color: "#2C3E50",
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Sinop, Culture et récolte de la canne à sucre",
	      latitude: -11.861946,
	      longitude: -55.508312, 
	      zoomLevel: 8,
	      zoomLongitude: -55.508312,
	      zoomLatitude: -11.861946,

	      lines: [{
	        latitudes: [-11.861946, -15.600685],
	        longitudes: [-55.508312, -56.101202]
	      }, {
	        latitudes: [-15.600685, -15.793629],
	        longitudes: [-56.101202, -47.887424]
	      }],

	      images: [{
	        label: "Farine et gluten de blé",
	        left: 106,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "farine"
	      }, {
	        label: "Huile de colza",
	        left: 106,
	        top: 40,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "huilecolza"
	      }, {
	        label: "Sucre roux de canne",
	        left: 100,
	        top: 60,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "sucreroux"
	      }, {
	        label: "Vinaigre de cidre",
	        left: 106,
	        top: 80,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "vinaigrecidre"
	      }, {
	        label: "Sel",
	        left: 106,
	        top: 100,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sel"
	      }, {
	        label: "Transformation",
	        left: 300,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "transformation"
	      }]
	  	},
	  	{
	      id: "vinaigrecidre",
	      color: "#2C3E50",
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Kasserine, Culture et récolte des pommes",
	      latitude: 35.205545,
	      longitude: 8.791722,
	      zoomLevel: 15,
	      zoomLongitude: 8.791722,
	      zoomLatitude: 35.205545,
	      lines: [{
	        latitudes: [35.205545, 35.075277],
	        longitudes: [8.791722, 9.450902]
	      }, {
	        latitudes: [35.075277, 36.935805],
	        longitudes: [9.450902, 10.134155]
	      }],

	      images: [{
	        label: "Farine et gluten de blé",
	        left: 106,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "farine"
	      }, {
	        label: "Huile de colza",
	        left: 106,
	        top: 40,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "huilecolza"
	      }, {
	        label: "Sucre roux de canne",
	        left: 106,
	        top: 60,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sucreroux"
	      }, {
	        label: "Vinaigre de cidre",
	        left: 100,
	        top: 80,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "vinaigrecidre"
	      }, {
	        label: "Sel",
	        left: 106,
	        top: 100,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sel"
	      }, {
	        label: "Transformation",
	        left: 300,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "transformation"
	      }]
	  	},
	  	{
	      id: "sel",
	      color: "#2C3E50",
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Aigues Mortes, Récolte des cristaux de sel et raffinage",
	      latitude: 43.567368, 
	      longitude: 4.192739,
	      zoomLevel: 15,
	      zoomLongitude: 4.192739, 
	      zoomLatitude: 43.567368,

	      images: [{
	        label: "Farine et gluten de blé",
	        left: 106,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "farine"
	      }, {
	        label: "Huile de colza",
	        left: 106,
	        top: 40,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "huilecolza"
	      }, {
	        label: "Sucre roux de canne",
	        left: 106,
	        top: 60,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sucreroux"
	      }, {
	        label: "Vinaigre de cidre",
	        left: 106,
	        top: 80,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "vinaigrecidre"
	      }, {
	        label: "Sel",
	        left: 100,
	        top: 100,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "sel"
	      }, {
	        label: "Transformation",
	        left: 300,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "transformation"
	      }]
	  	},
	  	{
	      id: "transformation",
	      color: "#2C3E50",
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Val-de-Saâne, Fabrication du pain de mie et emballage",
	      latitude: 49.704410, 
	      longitude: 0.964093,
	      zoomLevel: 2,
	      zoomLongitude: -40.324087,
	      zoomLatitude: 18.748177,
	      lines: [{
	        latitudes: [49.704410, 43.567368],
	        longitudes: [0.964093, 4.192739]
	      }, {
	        latitudes: [49.704410, 36.935805],
	        longitudes: [0.964093, 10.134155]
	      }, {
	        latitudes: [49.704410, -15.793629],
	        longitudes: [0.964093, -47.887424]
	      }, {
	        latitudes: [49.704410, 51.047448],
	        longitudes: [0.964093, -114.069349]
	      }, {
	        latitudes: [49.704410, 50.114828],
	        longitudes: [0.964093, 8.665403]
	      }],

	      images: [{
	        label: "Farine et gluten de blé",
	        left: 106,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "farine"
	      }, {
	        label: "Huile de colza",
	        left: 106,
	        top: 40,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "huilecolza"
	      }, {
	        label: "Sucre roux de canne",
	        left: 106,
	        top: 60,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sucreroux"
	      }, {
	        label: "Vinaigre de cidre",
	        left: 106,
	        top: 80,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "vinaigrecidre"
	      }, {
	        label: "Sel",
	        left: 106,
	        top: 100,
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 15,
	        linkToObject: "sel"
	      }, {
	        label: "Transformation",
	        left: 300,
	        top: 15,
	        labelShiftY: 5,
	        color: "#2C3E50",
	        labelColor: "#2C3E50",
	        labelRollOverColor: "#2C3E50",
	        labelFontSize: 20,
	        linkToObject: "transformation"
	      }]
	  	},
	  	{
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Hanovre, Nettoyage et mouture du blé",
	      latitude: 52.374741,
	      longitude: 9.730916
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Francfort, Stockage de la farine de blé",
	      latitude: 50.114828, 
	      longitude: 8.665403
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z", 
	      title: "Cuiabà, Raffinage du sucre roux",
	      latitude: -15.600685,
	    	longitude: -56.101202
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Brasilia, Conditionnement et stockage du sucre roux",
	      latitude: -15.793629, 
	      longitude: -47.887424
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Sidi Bouzid, Pressage des pommes et fermentation pour obtenir du cidre, puis du vinaigre de cidre",
	      latitude: 35.075277, 
	      longitude: 9.450902
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Tunis, Stockage et conditionnement du vinaigre de cidre",
	      latitude: 36.935805, 
	      longitude: 10.134155
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Paris, Centrale de stockage",
	      latitude: 48.911048, 
	      longitude: 2.433642
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Lyon, Vous êtes ici...",
	      latitude: 45.763285,
	      longitude: 4.837353
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Edmonton, Broyage, extraction du colza et conditionnement",
	      latitude: 53.541395,
	      longitude: -113.493949
	  	}, {
	      svgPath: "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",
	      title: "Calgary, Stockage de l'huile de colza",
	      latitude: 51.047448,
	      longitude: -114.069349
	  	}
    ]
  }
});
