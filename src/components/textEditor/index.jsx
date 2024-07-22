'use client'
import { useEffect, useRef } from 'react'

// style
import '@mantine/tiptap/styles.css'

// lib
import { useEditor } from '@tiptap/react'
import { RichTextEditor, Link } from '@mantine/tiptap'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import Image from '@tiptap/extension-image'

// icon
import { IconPhoto } from '@tabler/icons-react'

const content = ''

const TextEditor = ({ setEditorHtml }) => {
  const fileInputRef = useRef(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Image,
    ],
    content,
    onUpdate: ({ editor }) => {
      setEditorHtml(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor) {
      setEditorHtml(editor.getHTML())
    }
  }, [editor, setEditorHtml])

  const addImage = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = async event => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        // TODO: 서버에 이미지를 업로드하고 URL을 받아오는 로직
        // const formData = new FormData();
        // formData.append('file', file);
        // const response = await fetch('/upload', {
        //   method: 'POST',
        //   body: formData,
        // });
        // const data = await response.json();
        // const imageUrl = data.url;

        // 임시로, Base64 형식을 사용하여 이미지를 에디터에 추가
        const base64 = reader.result
        editor.chain().focus().setImage({ src: base64 }).run()

        // TODO: 추후 imageURL을 받아와서, 위 base64버전을 제거하고 아래 주석을 해제
        // editor.chain().focus().setImage({ src: imageUrl }).run()
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <button type="button" className="imageUploadButton" onClick={addImage}>
              <IconPhoto width={16} height={16} />
            </button>
            <RichTextEditor.Highlight />
            {/* <RichTextEditor.Code /> */}
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      </RichTextEditor>
      <style>
        {`
        .ProseMirror {
          height: 400px;

          overflow: scroll;
        }
        .imageUploadButton {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          min-width: calc(1.625rem* var(--mantine-scale));
          height: calc(1.625rem* var(--mantine-scale));
          border: calc(0.0625rem* var(--mantine-scale)) solid;
          border-color: var(--mantine-color-gray-4);
          border-right: none;
          cursor: pointer;
          svg {
            stroke: var(--mantine-color-dark-7);
          }
        }
        .imageUploadButton:hover {
          background-color: var(--mantine-color-gray-1);
        }
      `}
      </style>
    </>
  )
}

export default TextEditor
