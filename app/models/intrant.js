import DS from "ember-data";

var Intrant = DS.Model.extend({
  nom: DS.attr('string')
});

Intrant.reopenClass({
  FIXTURES: [
    { 
    	id:1,
    	nom: "Sulfate de cuivre"
    },
    { 
    	id:2,
    	nom: "Soufre"
    }
  ]
});

export default Intrant;