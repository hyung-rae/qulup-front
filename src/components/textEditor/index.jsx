import React, { useState, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const MyEditor = props => {
  const { editorHtml, setEditorHtml } = props

  const quillRef = useRef(null)

  const handleChange = (content, delta, source, editor) => {
    setEditorHtml(editor.getHTML())
  }

  const insertImage = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = e => {
      const quill = quillRef.current.getEditor()
      const range = quill.getSelection()
      quill.insertEmbed(range.index, 'image', e.target.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <div>
        <ReactQuill
          ref={quillRef}
          value={editorHtml}
          onChange={handleChange}
          modules={MyEditor.modules}
          formats={MyEditor.formats}
        />
        <input
          type="file"
          accept="image/*"
          onChange={insertImage}
          style={{ display: 'none' }}
          ref={input => input && (quillRef.current = input)}
        />
      </div>
      <style>
        {`.ql-container {
            min-height: 200px;
            max-height: 200px;
            overflow: scroll;
          }`}
      </style>
    </>
  )
}

MyEditor.modules = {
  toolbar: {
    container: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  },
}

MyEditor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
]

export default MyEditor
