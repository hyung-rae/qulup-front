import { CloseButton, Image, Modal } from '@mantine/core'
import { useRouter } from 'next/router'

const NoticePopup = ({ opened, onClose, article }) => {
  const { basePath } = useRouter()

  // TODO: attachment 이미지 절대경로로 변경후, 아래 Image 주석 해제하고 위에 이미지를 주석하기
  // article?.attachment
  return (
    <Modal.Root opened={opened} onClose={onClose}>
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <CloseButton size="xl" variant="transparent" c="white" pos="absolute" top={10} right={10} onClick={onClose} />
        <Modal.Body p={0}>
          <Image w={'100%'} h={'100%'} src={`${basePath}/images/popup.webp`} />
          {/* <Image w={'100%'} h={'100%'} src={article?.attachment} /> */}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default NoticePopup
