import DS from "ember-data";

var Acteur = DS.Model.extend({
  raisonSociale: DS.attr('string'),
  activite: DS.attr('string'),
  role: DS.attr('string'),
  descriptionCourte: DS.attr('string'),
  img_url: DS.attr('string'),
  adresse: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  codePostal: DS.attr('string'),
  departement: function(){
  	return this.get("codePostal").substring(0,2);
  }.property("codePostal"),
  cssCategory: function(){
  	if(this.get("role") === 'producteur'){
  		return "bg-info";
  	} else if(this.get("role") === 'intermediaire'){
  		return "bg-success";
  	} else if(this.get("role") === 'distributeur'){
  		return "bg-secondary";
  	}
  }.property('role'),
  ville: DS.attr('string'),
  departementTexte: DS.attr('string'),
});

Acteur.reopenClass({
  FIXTURES: [
    { 
    	id:1,
    	raisonSociale: "Durant EARL",
    	activite: "Maraîcher",
    	role: "producteur",
    	descriptionCourte: "Maraîcher depuis plus de 25 ans, et certifié bio depuis 1990, M. Durant produit des salades, des carottes, des patates et des choux. Son exploitation fait 6 hectares et sa production annuelle est d'environ 3 tonnes de légumes. Il emploie jusqu'à 8 personnes en haute saison et est membre de la coopérative CoopLegumesLoire.",
    	img_url: "assets/img/josebove.jpg",
    	adresse: "",
    	codePostal: "37000",
    	ville: "Loches",
    	latitude: 47.127918,
    	longitude: 0.998254,
    	departementTexte: "Indre-et-Loire",
    },
    { 
    	id:2,
    	raisonSociale: "Dynamis",
    	activite: "Grossiste en fruits et légumes bio",
    	role: "intermediaire",
    	descriptionCourte: "Dynamis; son emplacement stratégique au cœur du marché international de Rungis, ses arrivages et départs quotidiens en provenance et à destination de toute l’Europe, vous garantissent un approvisionnement régulier et d’une fraîcheur optimale.",
    	img_url: "assets/img/dynamis.png",
    	adresse: "",
    	codePostal: "94000",
    	ville: "Rungis",
    	latitude: 48.749422,
    	longitude: 2.350048,
    	departementTexte: "Val-de-Marne",
    },
    { 
    	id:3,
    	raisonSociale: "La Vie Claire",
    	activite: "Distributeur de produits bio",
    	role: "distributeur",
    	descriptionCourte: "Acteur engagé dans la distribution de produits biologiques en France depuis 1948, La Vie Claire possède un réseau de magasins bio en propre et franchisés sur tout le territoire.",
    	img_url: "assets/img/lavieclaire.jpeg",
    	adresse: "8 rue Clément Marot",
    	codePostal: "69007",
    	ville: "Lyon",
    	latitude: 45.737476,
    	longitude: 4.832608,
    	departementTexte: "Rhône",
    },
    { 
      id:4,
      raisonSociale: "Grégory Gorce",
      activite: "Eleveur de volailles",
      role: "producteur",
      descriptionCourte: "Grégory a repris l'élevage famillial et élève 6 000 poules biologiques. En plus de son élevage, il produit chaque année de la lavande. Madame Gorce, sa maman, élève ânes et mulets.",
      img_url: "assets/img/gorce.png",
      adresse: "",
      codePostal: "26400",
      ville: "Pregros-La-Clastre",
      latitude: 44.690652, 
      longitude: 5.091541,
      departementTexte: "Drôme",
    },
    { 
      id:5,
      raisonSociale: "Val d'Eurre",
      activite: "Producteur et distributeur d'œufs plein-air et biologique",
      role: "intermediaire",
      descriptionCourte: "Située au cœur de la Drôme à une trentaine de kilomètres de Valence, la société anonyme Val d’Eurre, créée en 1985, s'est spécialisée dans la production, le conditionnement et la commercialisation des œufs de poules élevées en plein air et issues de l’agriculture biologique.",
      img_url: "assets/img/valdeurre.png",
      adresse: "",
      codePostal: "26400",
      ville: "Eurre",
      latitude: 44.816245,
      longitude: 4.990175,
      departementTexte: "Drôme",
    },
  ]
});

export default Acteur;