import CommentUI from './Comment.presenter'

const Comment = ({ opened, onClose }) => {
  return <CommentUI opened={opened} onClose={onClose} />
}

export default Comment
