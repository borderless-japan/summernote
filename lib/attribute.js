orion.attributes.registerAttribute('summernote', {
	template: 'orionAttributesSummernote',
	columnTemplate: 'orionAttributesSummernoteColumn',
	getSchema: function(options) {
		return {
			type: String,
			label: options.label || 'Text',
			optional: options.optional || false,
		};
	},
	valueOut: function() {
		return this.find('.summernote').code();
	}
});