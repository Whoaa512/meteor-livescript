Package.describe({summary: "LiveScript, a CoffeeScript descendant with improvements and new features."});

Package._transitional_registerBuildPlugin({
  name: "compileLiveScript",
  use: [],
  sources: [
    'plugin/compile-livescript.js'
  ],
  npmDependencies: {"LiveScript": "1.2.0"}
});
