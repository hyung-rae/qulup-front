import { Text, Avatar, Group, Paper, Textarea, Box, Button } from '@mantine/core'

const AddComment = () => {
  return (
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
  )
}

export default AddComment
