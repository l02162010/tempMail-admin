let _editor;

// init ckEditor
ClassicEditor.create( document.querySelector('.editor'))
	.then(editor => {
		_editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	});
  
const getEditorData = () => {
  const data = _editor.getData();
  console.log(data)
}

document.querySelector('#save').addEventListener('click', () => {
  getEditorData()
});

