import WriteModalUI from './WriteModal.presenter'

const WriteModal = ({ ...props }) => {
  const { editorHtml, setEditorHtml, handlePostData, writingOpened, writingOpen, writingClose } = props
  return <WriteModalUI {...props} />
}

export default WriteModal
