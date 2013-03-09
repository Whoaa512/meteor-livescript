Package.describe({summary: "Add support for LiveScript, a more functional take on Coffeescript."});

Package.register_extension("ls", function(bundle, src, srv, where) {
	var contents, compiled;

	contents = require('fs').readFileSync(src, 'utf8');
	compiled = require('./LiveScript').compile(contents, {bare:true});

	bundle.add_resource({
		type: "js",
		path: srv+'.js',
		data: new Buffer(compiled),
		where: where
	});
});