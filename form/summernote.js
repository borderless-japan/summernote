Template.orionSummernote.events({
    
})

Template.orionSummernote.rendered = function () {
    var key = this.data.name;
    var element = $('.summernote[data-schema-key="' + key + '"]');
    var parent = element.closest(".panel-body");
    parent.addClass('summernote-container');
    element.summernote({
        height: 300,
        onImageUpload: function(files, editor, $editable) {
            element.parent().find('.progress').show();
            orion.filesystem.upload({fileList: files, name: files[0].name, folder: 'summernote', canRemove: true}, function(file, error) {
                if (!error) {
                    editor.insertImage($editable, file.url);
                } else {
                    console.log(error, "error uploading file")
                }
                element.parent().find('.progress').hide();
            });
        }
    });
    element.code(this.data.value);
};