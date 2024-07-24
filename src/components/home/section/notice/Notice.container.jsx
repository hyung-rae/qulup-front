import { useDisclosure } from '@mantine/hooks'
import NoticeUI from './Notice.presenter'

const Notice = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return <NoticeUI opened={opened} open={open} onClose={close} />
}

export default Notice
