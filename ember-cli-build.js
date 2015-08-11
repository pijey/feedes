/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-bootswatch': {
      'theme': 'flatly', 
      'excludeJS': false   
    },
    
    minifyCSS: {
      enabled: true
    },
    fingerprint: {
      extensions : ['js', 'css']
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/odometer/themes/odometer-theme-car.css');
  app.import('bower_components/odometer/themes/odometer-theme-minimal.css');
  app.import('bower_components/ember/ember-template-compiler.js');
  app.import('bower_components/amcharts/dist/amcharts/amcharts.js');
  app.import('bower_components/amcharts/dist/amcharts/pie.js');
  app.import('bower_components/amcharts/dist/amcharts/serial.js');

  app.import('bower_components/ammap/dist/ammap/ammap_amcharts_extension.js');
  app.import('bower_components/ammap/dist/ammap/maps/js/worldLow.js');
  app.import('bower_components/ammap/dist/ammap/maps/js/franceDepartmentsHigh.js');
  app.import('bower_components/ammap/dist/ammap/ammap.css');
  app.import('bower_components/amcharts/dist/amcharts/plugins/responsive/responsive.js');

  app.import('bower_components/jquery-circle-progress/dist/circle-progress.js');

  return app.toTree();
};
