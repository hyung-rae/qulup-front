import { CloseButton, Image, Modal } from '@mantine/core'
import { useRouter } from 'next/router'

const NoticePopup = ({ opened, onClose }) => {
  const { basePath } = useRouter()
  return (
    <Modal.Root opened={opened} onClose={onClose}>
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <CloseButton size="xl" variant="transparent" c="white" pos="absolute" top={10} right={10} onClick={onClose} />
        <Modal.Body p={0}>
          <Image w={'100%'} h={'100%'} src={`${basePath}/images/popup.webp`} />
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default NoticePopup
