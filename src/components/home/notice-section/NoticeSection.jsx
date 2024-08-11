import { Badge, Box, Container, Divider, Flex, Group, ScrollArea, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { noticeList } from './mock'
import classes from './Notice.module.css'
import NoticePopup from './NoticePopup'

const NoticeSection = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <Container py={50} fluid bg={'dark.7'} id="notice">
      {/* 팝업 */}
      <NoticePopup opened={opened} onClose={close} />

      <Title order={3} c="white" fw={700} m={'auto'} mb={20} maw={1000}>
        공지사항 & 이벤트
      </Title>

      <ScrollArea maw={1000} h={350} m={'auto'} py={20} scrollbars="y" scrollbarSize={10} classNames={classes}>
        <Flex direction="column" gap={20}>
          {noticeList.map(({ id, type, title }) => (
            <Group key={id} align="center">
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
              <Box className={classes.title_section} style={{ cursor: 'pointer' }} onClick={open}>
                <Text size="sm" c="white" fw={700} lineClamp={1}>
                  {title}
                </Text>
              </Box>
            </Group>
          ))}
        </Flex>
      </ScrollArea>

      <Divider mt="lg" labelPosition="center" color="gray.8" />
    </Container>
  )
}

export default NoticeSection
