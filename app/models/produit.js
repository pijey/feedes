import DS from "ember-data";

var Produit = DS.Model.extend({
  photo_url: DS.attr('string'),
  marque: DS.attr('string'),
  denomination: DS.attr('string'),
  description: DS.attr('string'),
  origine_macro: DS.attr('string'),
  conditionnement: DS.attr('number'),
  unite_conditionnement: DS.attr('string'),
  prix_conditionnement: DS.attr('number'),
  prix_global: DS.attr('number'),
  unite_globale: DS.attr('string'),
  prix_portion: DS.attr('number'),
  energie_portion: DS.attr('number'),
  nombre_portions: DS.attr('number'),
  poids_portion: function(){
    return Math.round(this.get('conditionnement') * 100 / this.get('nombre_portions')) / 100;
  }.property('nombre_portions',
    'conditionnement'),
  unite_portion: DS.attr('string'),
  transparence: DS.attr('number'),
  kms: DS.attr('string'),
  energie: DS.attr('string'),
  matieres_grasses: DS.attr('number'),
  matieres_grasses_saturees: DS.attr('number'),
  glucides: DS.attr('number'),
  glucides_dont_sucres: DS.attr('number'),
  fibres: DS.attr('number'),
  proteines: DS.attr('number'),
  sel: DS.attr('number')
});

Produit.reopenClass({
  FIXTURES: [
    { 
      id: 1,
      photo_url: 'assets/img/paindemiebiocasinocroppedall.jpg',
      marque: 'Cosina',
      denomination: 'Pain de mie',
      description: 'Grâce à ses grandes tranches moelleuses et savoureuses, ce pain de mie fabriqué dans le respect de l\'agriculture biologique vous accompagnera agréablement dans tous vos instants de consommation',
      origine_macro: 'Monde',
      conditionnement: 500,
      unite_conditionnement:'g',
      prix_conditionnement:2.98,
      prix_global: 5.96,
      unite_globale: 'kg',
      prix_portion: 0.21,
      energie_portion: 105,
      kms: '20500.5',
      transparence: 75,
      nombre_portions: 14,
      unite_portion: 'tranche',
      matieres_grasses: 2.1,
      matieres_grasses_saturees: 0.2,
      glucides : 18,
      glucides_dont_sucres: 2 ,
      fibres : 1.2,
      proteines: 2.9 ,
      sel : 0.5 
    }
  ]
});

export default Produit;