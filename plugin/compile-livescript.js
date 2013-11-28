var fs = Npm.require('fs');
var path = Npm.require('path');
var livescript = Npm.require('LiveScript');

var handler = function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";

  options = {
    bare: true
  };

  try {
    var output = livescript.compile(source, options);
  } catch (e) {
    throw new Error(
      compileStep.inputPath + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: output
  });
};

Plugin.registerSourceHandler('ls', handler);
