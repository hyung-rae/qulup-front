import { Avatar, Box, Button, CloseButton, Flex, Group, Image, Modal, Text, Textarea } from '@mantine/core'

const CommentUI = ({ opened, onClose }) => {
  return (
    <Modal.Root opened={opened} onClose={onClose} size="lg">
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <CloseButton size="xl" variant="transparent" c="dark" pos="absolute" top={10} right={10} onClick={onClose} />
        <Modal.Body p={0}>
          <Image w="100%" fit="contain" src={null} fallbackSrc="https://placehold.co/600x400?text=Placeholder" />
          <Flex direction="column" p="xl" gap={30}>
            <Box>
              <Group mb={10}>
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                  alt="Jacob Warnhalter"
                  radius="xl"
                />
                <Text size="sm">우형래</Text>
                <Button w={60} size="xs" variant="filled" color="dark" ml="auto">
                  등록
                </Button>
              </Group>
              <Box>
                <Textarea autosize minRows={3} maxRows={3} placeholder="댓글을 입력하세요." />
              </Box>
            </Box>
            <div>
              <Group>
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                  alt="Jacob Warnhalter"
                  radius="xl"
                />
                <div>
                  <Text size="sm">Jacob Warnhalter</Text>
                  <Text size="xs" c="dimmed">
                    10 minutes ago
                  </Text>
                </div>
              </Group>
              <Text pl={54} pt="sm" size="sm">
                This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its
                own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude
                from its shell. The water spouts are very accurate.
              </Text>
            </div>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default CommentUI
