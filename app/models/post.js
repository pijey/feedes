import DS from 'ember-data';

var Post = DS.Model.extend({
  	md_file_url: DS.attr('string'),
  	title: DS.attr('string'),
  	description: DS.attr('string'),
  	image: DS.attr('string')
});

Post.reopenClass({
  	FIXTURES: [
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
