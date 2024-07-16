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
const Notice = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <Container fluid mt={120} p="lg">
      {/* 팝업 */}
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content pos="relative">
          <CloseButton size="xl" variant="transparent" c="white" pos="absolute" top={10} right={10} onClick={close} />
          <Modal.Body p={0}>
            <Image w={'100%'} h={'100%'} src={'./popup.webp'} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Divider
        my="lg"
        label={
          <Title order={3} c="white" fw={700}>
            공지사항 / 이벤트
          </Title>
        }
        labelPosition="center"
      />
      <ScrollArea maw={800} h={250} m="auto" offsetScrollbars scrollbarSize={8}>
        <Flex direction="column" p="xl" gap={10}>
          {new Array(5).fill(1).map((_, i) => (
            <Group key={i} style={{ cursor: 'pointer' }} onClick={open}>
              <Box miw={60}>
                {i < 3 && (
                  <Badge color={i % 2 === 0 ? 'red' : 'blue'} size="sm">
                    {i % 2 === 0 ? 'New' : 'Event'}
                  </Badge>
                )}
              </Box>

              <Text size="sm" c="white" fw={700}>
                {i + 1}월 {i % 2 === 0 ? '업데이트' : '이벤트'} 소식
              </Text>
            </Group>
          ))}
        </Flex>
      </ScrollArea>
    </Container>
  )
}

export default Notice
