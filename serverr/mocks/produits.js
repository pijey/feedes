module.exports = function(app) {
  var express = require('express');
  var produitsRouter = express.Router();
  var dataToSend = [
    { id: 1, photo_url: 'assets/img/paindemiebiocasino.jpg', marque: 'Distrib', denomination: 'Pain de mie', 
      description: 'Grâce à ses grandes tranches moelleuses et savoureuses, ce pain de mie fabriqué dans le respect de l\'agriculture biologique vous accompagnera agréablement dans tous vos instants de consommation', 
      origine_macro: 'Monde', conditionnement: 500, unite_conditionnement:'g', prix_conditionnement:2.98, prix_global: 5.96, unite_globale: 'kg', prix_portion: 0.21,
      energie_portion: 105, kms: '20500.5',transparence: 75, nombre_portions: 14, unite_portion: 'tranche',
      matieres_grasses: 2.1, matieres_grasses_saturees: 0.2,
      glucides : 18,glucides_dont_sucres: 2 ,
      fibres : 1.2,proteines: 2.9 ,sel : 0.5 }
  ];

  produitsRouter.get('/', function(req, res) {
    res.send({
      'produits': dataToSend
    });
  });

  produitsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  produitsRouter.get('/:id', function(req, res) {
    var id = req.query.id;
    var produits;

    if (id) {
      produits = dataToSend.filter(function(b) {
        return id.indexOf(b.id.toString()) > -1;
      });
    }
    else {
      produits = dataToSend;
    }

    res.send({"produits": produits});
  });

  produitsRouter.put('/:id', function(req, res) {
    res.send({
      'produits': {
        id: req.params.id
      }
    });
  });

  produitsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/produits', produitsRouter);
};
