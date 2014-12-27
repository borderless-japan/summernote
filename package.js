Package.describe({
	name: 'orionjs:summernote',
	summary: 'Summernote editor for orionjs',
	version: '0.2.0',
	git: 'https://github.com/orionjs/summernote'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'orionjs:core@0.1.0',
		'meteor-platform',
		'less',
		'aldeed:autoform@4.0.2', 
		'orionjs:filesystem@0.0.6', 
		'summernote:standalone@0.6.0',
		'natestrauser:font-awesome@4.2.0',
		'jquery@1.0.0'
		]);

	api.imply([
		'summernote:standalone',
		]);

	api.addFiles([
		'lib/attribute.js',
		]);

	api.addFiles([
		'lib/template/template.html',
		'lib/template/template.js',
		'lib/template/template.less',
		], 'client');
});
