import {
  Badge,
  Box,
  Center,
  CloseButton,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Modal,
  ScrollArea,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { noticeList } from './notice-mock'
import classes from './Notice.module.css'
const Notice = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <Container py={50} fluid bg={'dark.7'}>
      {/* 팝업 */}
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content pos="relative">
          <CloseButton size="xl" variant="transparent" c="white" pos="absolute" top={10} right={10} onClick={close} />
          <Modal.Body p={0}>
            <Image w={'100%'} h={'100%'} src={'/images/popup.webp'} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Title order={3} c="white" fw={700} m={'auto'} mb={20} maw={1000}>
        공지사항 & 이벤트
      </Title>

      <ScrollArea maw={1000} h={350} m={'auto'} py={20} scrollbars="y" scrollbarSize={10} classNames={classes}>
        <Flex direction="column" gap={20}>
          {noticeList.map(({ id, type, title }) => (
            <Group key={id} align="center" style={{ cursor: 'pointer' }} onClick={open}>
              {type === 'new' && (
                <Badge color={'teal'} size="sm" miw={60}>
                  NEW
                </Badge>
              )}
              {type === 'event' && (
                <Badge color={'cyan'} size="sm" miw={60}>
                  EVENT
                </Badge>
              )}
              {type === 'normal' && <Box miw={60} />}
              <Box className={classes.title_section}>
                <Text size="sm" c="white" fw={700} lineClamp={1}>
                  {title}
                </Text>
              </Box>
            </Group>
          ))}
        </Flex>
      </ScrollArea>

      <Divider my="lg" labelPosition="center" color="gray.8" />
    </Container>
  )
}

export default Notice
