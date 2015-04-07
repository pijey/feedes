import Ember from 'ember';

export default Ember.Controller.extend({
	chartDataProvider:[
        {
            "poste": "Conditionnement",
            "euros": 0.69
        }, {
            "poste": "Logistique",
            "euros": 0.22
        }, {
            "poste": "Producteur",
            "euros": 1.07 
        }, {
            "poste": "Coûts distributeurs",
            "euros": 0.79
        }, {
            "poste": "Bénéfice",
            "euros": 0.04
        }, {
            "poste": "TVA",
            "euros": 0.16
        }],
        chartColors:["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#FFFF00"],
        chartCategories:"poste",
        chartValues:"euros"
});
