orion.attributes.registerAttribute('summernote', {
	template: 'orionAttributesSummernote',
	columnTemplate: 'orionAttributesSummernoteColumn',
	getSchema: function(options) {
		if (!options) {
			options = {};
		}
		
		options.type = String;
		return options;
	},
	valueOut: function() {
		return this.find('.summernote').code();
	}
});