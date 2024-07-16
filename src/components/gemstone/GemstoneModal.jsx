import { CloseButton, Flex, Image, Modal } from '@mantine/core'
import CommentItem from './CommentItem'
import AddComment from './AddComment'

const GemstoneModal = ({ opened, onClose }) => {
  return (
    <Modal.Root opened={opened} onClose={onClose} size="lg">
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <CloseButton size="lg" variant="transparent" c="dark" pos="absolute" top={10} right={10} onClick={onClose} />
        <Modal.Body p={0}>
          <Image w="100%" fit="contain" src={null} fallbackSrc="https://placehold.co/600x400?text=Placeholder" />
          <Flex direction="column" p="xl" gap={30}>
            <AddComment />
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default GemstoneModal
