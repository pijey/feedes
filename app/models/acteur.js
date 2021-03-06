import DS from "ember-data";

var Acteur = DS.Model.extend({
  raisonSociale: DS.attr('string'),
  activite: DS.attr('string'),
  role: DS.attr('string'),
  descriptionCourte: DS.attr('string'),
  descriptionPerso: DS.attr('string'),
  img_url: DS.attr('string'),
  logo_url: DS.attr('string'),
  adresse: DS.attr('string'),
  magasin: DS.attr('string'),
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
  telephone: DS.attr('string'),
  email: DS.attr('string'),
  horaires: DS.attr(),
  equipe: DS.attr(),
  agenda: DS.attr(),
  social: DS.attr(),
});

Acteur.reopenClass({
  FIXTURES: [
    { 
    	id:1,
    	raisonSociale: "Durant EARL",
    	activite: "Maraîcher",
    	role: "producteur",
    	descriptionCourte: "Maraîcher depuis plus de 25 ans, et certifié bio depuis 1990, M. Durant produit des salades, des carottes, des patates et des choux. Son exploitation fait 6 hectares et sa production annuelle est d'environ 3 tonnes de légumes. Il emploie jusqu'à 8 personnes en haute saison et est membre de la coopérative CoopLegumesLoire.",
    	logo_url: "assets/img/josebove.jpg",
    	adresse: "7 chemin des cerises",
    	codePostal: "37000",
    	ville: "Loches",
    	latitude: 47.127918,
    	longitude: 0.998254,
    	departementTexte: "Indre-et-Loire",
      telephone: "05 54 69 32 44",
      email: "durantearl@wanadoo.fr",
      horaires: [
        {jour:"Lundi", horaire: "Fermé"},
        {jour:"Mardi", horaire: "Fermé"},
        {jour:"Mercredi", horaire: "Fermé"},
        {jour:"Jeudi", horaire: "Fermé"},
        {jour:"Vendredi", horaire: "Fermé"},
        {jour:"Samedi", horaire: "10h - 16h"},
        {jour:"Dimanche", horaire: "10h - 16h"},
      ],
      equipe: [
        {prenom:"Pierre", fonction:"Agriculteur", photo_url:"assets/img/avatars/male3.png", minibio:"Je suis passionnée depuis toujours par l'environnement et l'alimentation."},
        {prenom:"Sylvie", fonction: "Agricultrice", photo_url:"assets/img/avatars/female1.png", minibio:"J'aime la randonnée et les sports extrêmes."},
      ],
      social: [
        {label: "Forme juridique", text: "EARL"},
        {label: "Nombre d'employés", text: "2"},
        {label: "Moyenne d'âge", text: "46 ans"},
        {label: "Types de contrats", text: "CDI/Intérimaires"},
        {label: "Rémunération moyenne", text: "1462 € bruts par mois"},
        {label: "Répartion H/F", text: "67%/33%"},
        {label: "Chiffre d'affaire", text: "250 000 € (2014)"},
        {label: "Bénéfice", text: "11 000 € (2014)"},
      ]
    },
    { 
    	id:2,
    	raisonSociale: "Dynamis",
    	activite: "Grossiste en fruits et légumes bio",
    	role: "intermediaire",
    	descriptionCourte: "Dynamis; son emplacement stratégique au cœur du marché international de Rungis, ses arrivages et départs quotidiens en provenance et à destination de toute l’Europe, vous garantissent un approvisionnement régulier et d’une fraîcheur optimale.",
    	logo_url: "assets/img/dynamis.png",
    	adresse: "",
    	codePostal: "94000",
    	ville: "Rungis",
    	latitude: 48.749422,
    	longitude: 2.350048,
    	departementTexte: "Val-de-Marne",
    },
    { 
    	id:3,
      raisonSociale: "Le Cri Clair",
    	magasin: "Gerland",
    	activite: "Distributeur de produits bio",
    	role: "distributeur",
      descriptionCourte: "Acteur engagé dans la distribution de produits biologiques en France depuis 1948, Le Cri Clair possède un réseau de magasins bio en propre et franchisés sur tout le territoire.",
    	descriptionPerso: "Toute l'équipe est à votre disposition pour vous accueillir et vous conseiller. Julie",
      logo_url: "assets/img/lecriclair.jpeg",
    	img_url: "assets/img/gerland.jpeg",
    	adresse: "8 rue Clément Marot",
    	codePostal: "69007",
    	ville: "Lyon",
    	latitude: 45.737476,
    	longitude: 4.832608,
      departementTexte: "Rhône",
      telephone: "04 78 96 42 04",
      email: "gerland@lecriclair.com",
    	horaires: [
        {jour:"Lundi", horaire: "9h - 19h30"},
        {jour:"Mardi", horaire: "9h - 19h30"},
        {jour:"Mercredi", horaire: "9h - 19h30"},
        {jour:"Jeudi", horaire: "9h - 19h30"},
        {jour:"Vendredi", horaire: "9h - 19h30"},
        {jour:"Samedi", horaire: "9h - 19h30"},
        {jour:"Dimanche", horaire: "Fermé"},
      ],
      equipe: [
        {prenom:"Julie", fonction:"Responsable du magasin", photo_url:"assets/img/avatars/female1.png", minibio:"Je suis passionnée depuis toujours par l'environnement et l'alimentation."},
        {prenom:"Damien", fonction: "Mise en rayon", photo_url:"assets/img/avatars/male3.png", minibio:"J'aime la randonnée et les sports extrêmes."},
        {prenom:"Caroline", fonction: "Vendeuse", photo_url:"assets/img/avatars/girl.png", minibio:"Jeune maman, je me sens concernée par une alimentation saine."},
      ],
      agenda: [
        {date:"21/06/2015", evenement:"Présentation et dégustation des produits de la ferme de Margerie", horaire: "de 9h à 19h"},
        {date:"04/07/2015", evenement:"Initiation à l'utilisation des huiles essentielles", horaire: "à 10h"},
        {date:"18/08/2015", evenement:"Atelier de cuisine autour des flocons de céréales", horaire: "de 14h à 16h"},
      ],
      social: [
        {label: "Forme juridique", text: "Franchise"},
        {label: "Nombre d'employés", text: "3"},
        {label: "Moyenne d'âge", text: "35 ans"},
        {label: "Types de contrats", text: "CDI"},
        {label: "Rémunération moyenne", text: "1854 € bruts par mois"},
        {label: "Répartion H/F", text: "33%/67%"},
        {label: "Chiffre d'affaire", text: "354 000 € (2014)"},
        {label: "Bénéfice", text: "12 000 € (2014)"},
      ]
    },
    { 
      id:4,
      raisonSociale: "M. Durand",
      activite: "Eleveur de volailles",
      role: "producteur",
      descriptionCourte: "M. Durant a repris l'élevage famillial et élève 6 000 poules biologiques. En plus de son élevage, il produit chaque année de la lavande. Madame Durant, sa maman, élève ânes et mulets.",
      logo_url: "assets/img/volaille_elevage.jpg",
      adresse: "",
      codePostal: "26400",
      ville: "Pregros-La-Clastre",
      telephone: "05 55 55 55 5",
      email: "durant@volailles.com",
      latitude: 44.690652, 
      longitude: 5.091541,
      departementTexte: "Drôme",
    },
    { 
      id:5,
      raisonSociale: "Val d'Erre",
      activite: "Producteur et distributeur d'œufs plein-air et biologique",
      role: "intermediaire",
      descriptionCourte: "Située au cœur de la Drôme à une trentaine de kilomètres de Valence, la société anonyme Val d’Erre, créée en 1985, s'est spécialisée dans la production, le conditionnement et la commercialisation des œufs de poules élevées en plein air et issues de l’agriculture biologique.",
      logo_url: "assets/img/valderre.png",
      adresse: "",
      codePostal: "26400",
      ville: "Eurre",
      latitude: 44.816245,
      longitude: 4.990175,
      departementTexte: "Drôme",
    },
    { 
      id:6,
      raisonSociale: "Gérard Dupont",
      activite: "Eleveur de bovins",
      descriptionPerso: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis ultricies tellus. Curabitur fermentum ultricies augue, in tempor risus pharetra quis. Maecenas id dolor et erat efficitur consequat. Quisque in posuere dolor, sit amet ullamcorper nunc. Suspendisse sagittis arcu a erat porta.",
      img_url: "assets/img/dupontmaxi.jpg",
      role: "producteur",
      descriptionCourte: "Monsieur Dupont a fini sa formation agricole a 24 ans et s’est mis directement à son compte. Après la retraite de ses parents, il a repris l’exploitation familiale. Cette dernière date de 1967.",
      logo_url: "assets/img/eleveurboeufmini.jpg",
      adresse: "Route du Petit Billoux",
      codePostal: "19290",
      ville: "Peyrelevade",
      telephone: "05 56 56 56 56",
      email: "dupond@bovins.com",
      latitude: 45.705437,
      longitude: 2.052638,
      departementTexte: "Corrèze",
      equipe: [
        {prenom:"Gérard", fonction:"Responsable ", photo_url:"assets/img/avatars/male3.png", minibio:""},
        {prenom:"Sophie", fonction: "M", photo_url:"assets/img/avatars/female1.png", minibio:""},
      ],
    },
    { 
      id:7,
      raisonSociale: "Chapal (site d'Egletons)",
      activite: "Abattage",
      role: "intermediaire",
      descriptionCourte: "Acquis en 1999, le site Chapal d'Egletons est le plus important site d'abattage du Limousin, terre d'élevage réputée. L'essentiel de sa production est consacrée à la fabrication des produits Chapal",
      logo_url: "assets/img/chapal.gif",
      adresse: "899 Boulevard du Puy Nègre",
      codePostal: "19300",
      ville: "Egletons",
      latitude: 45.402510, 
      longitude: 2.061629,
      departementTexte: "Corrèze",
    },
    { 
      id:8,
      raisonSociale: "Chapal (site de Cholet)",
      activite: "Transformation et conservation de la viande de boucherie",
      role: "intermediaire",
      descriptionCourte: "Berceau historique de la marque Chapal, il est à la fois le siège de Chapal et son pôle d'excellence pour la production des gammes de produits élaborés frais. L'usine est spécialisée dans l'abattage, la découpe, la transformation de produits élaborés frais et leur conditionnement. Le site est également une de plate-forme logistique nationale pour les produits élaborés frais fabriqués.",
      logo_url: "assets/img/chapal.gif",
      adresse: "1 place Jean Chavel",
      codePostal: "49301",
      ville: "Cholet",
      latitude: 47.073512, 
      longitude: -0.872171,
      departementTexte: "Maine-et-Loire",
    },
    { 
      id:9,
      raisonSociale: "Easysis (site de Allonnes)",
      activite: "Logistique",
      role: "intermediaire",
      descriptionCourte: "Easysis est la filiale logistique du groupe Cosina en France, créée en juillet 2000. Détenue à 100% par le groupe, elle est dédiée aux activités de préparation de commandes magasin et de livraison pour ses principales enseignes en France.",
      logo_url: "assets/img/easysis.jpeg",
      adresse: "8 boulevard du Poitou",
      codePostal: "49650",
      ville: "Allonnes", 
      latitude: 47.297895, 
      longitude: 0.000912,
      departementTexte: "Maine-et-Loire",
    },
    { 
      id:10,
      raisonSociale: "Cosina (Lyon 7)",
      activite: "Distributeur",
      role: "distributeur",
      descriptionCourte: "Le groupe Cosina est un groupe de distribution en France et dans le monde. Il est dirigé par John Doe, est coté à la bourse de Paris et a pour actionnaire majoritaire la société Foobar.",
      logo_url: "assets/img/GroupeCosinaMini.png",
      adresse: "126 Cours Gambetta",
      codePostal: "69007",
      ville: "Lyon",
      latitude: 45.750799, 
      longitude: 4.855708,
      departementTexte: "Rhône",
      telephone: "04 72 76 86 00",
      email: "contact@cosina.fr",
      horaires: [
        {jour:"Lundi", horaire: "8h30 - 20h30"},
        {jour:"Mardi", horaire: "8h30 - 20h30"},
        {jour:"Mercredi", horaire: "8h30 - 20h30"},
        {jour:"Jeudi", horaire: "8h30 - 20h30"},
        {jour:"Vendredi", horaire: "8h30 - 20h30"},
        {jour:"Samedi", horaire: "8h30 - 20h30"},
        {jour:"Dimanche", horaire: "9h - 12h15"},
      ]
    },
  ]
});

export default Acteur;