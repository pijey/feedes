import DS from 'ember-data';

var Post = DS.Model.extend({
  	md_file_url: DS.attr('string'),
  	title: DS.attr('string'),
  	description: DS.attr('string'),
  	image: DS.attr('string')
});

Post.reopenClass({
  	FIXTURES: [
      /*{
        id: "2015-04-29-se-faire-connaitre",
        md_file_url: "2015-04-29-se-faire-connaitre",
        title: "Se faire connaître",
        description: "Ce n'est pas tout d'avoir un site de présentation du projet, encore faut-il qu'il soit consulté..."
      },*/
      {
        id: "2015-05-05-lecithine-de-soja",
        md_file_url: "2015-05-05-lecithine-de-soja",
        title: "Additif : la lécithine de soja",
        description: "Si vous regardez régulièrement la liste des ingrédients de vos produits alimentaires, vous êtes forcément tombés dessus : la lécithine (principalement de soja) ou son équivalent alphanumérique E322"
      },
      {
        id: "2015-04-27-mangeons-nous-comme-nos-parents",
        md_file_url: "2015-04-27-mangeons-nous-comme-nos-parents",
        title: "Mangeons-nous comme nos parents ?",
        description: "En 40-45 ans, comme vous vous en doutez, nos habitudes alimentaires ont bien changé...."
      },
    	{
    		id: "2015-04-21-lancement-du-site",
    		md_file_url: "2015-04-21-lancement-du-site",
    		title: "Lancement du site !",
    		description: "Soyons clairs, c'est bien le projet qui est lancé aujourd'hui, et non la plateforme fonctionnelle avec des produits déjà référencés..."
    	}
      
  	]
});

export default Post;
