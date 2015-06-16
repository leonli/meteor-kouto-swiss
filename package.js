Package.describe({
  name: 'leonli:kouto-swiss',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'add kouto-swiss support to the meteor world... A complete CSS framework for Stylus',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/leonli/meteor-kouto-swiss',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.51.1",
    nib: "1.1.0",
    jeet: "6.1.2",
    rupture: "0.6.1",
    "kouto-swiss": "0.11.12"
  }
});

Package.onTest(function(api) {
  api.use(['tinytest', 'leonli:kouto-swiss', 'test-helpers']);
  api.add_files([
    'tests/rupture_.styl',
    'tests/tinytest.js'
  ],'client');
});



