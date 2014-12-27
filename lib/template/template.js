Template.orionAttributesSummernote.rendered = function () {
    var key = this.data.name;
    var parent = $('[data-schema-key="' + key + '"]')
    var element = parent.find('.summernote');
    element.summernote({
        height: 300,
        onImageUpload: function(files, editor, $editable) {
            parent.find('.progress').show();
            orion.filesystem.upload({fileList: files, name: files[0].name, folder: 'summernote', canRemove: true}, function(file, error) {
                if (!error) {
                    editor.insertImage($editable, file.url);
                } else {
                    console.log(error, "error uploading file")
                }
                parent.find('.progress').hide();
            });
        }
    });
    element.code(this.data.value);
};

Template.orionAttributesSummernoteColumn.helpers({
    preview: function () {
        var value = this;
        var tmp = document.createElement("DIV");
        var content = value.replace(/<(?:.|\n)*?>/gm, ' ');
        if(content.length > 50) content = content.substring(0, 47).trim() + '...';
        return content;
    }
});