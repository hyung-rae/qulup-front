import { Badge, Box, Container, Divider, Flex, Group, ScrollArea, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
// import { noticeList } from './mock'
import classes from './Notice.module.css'
import NoticePopup from './NoticePopup'
import useBoardApi from '@/src/api/board/useBoardApi'
import { useEffect, useState } from 'react'

const NoticeSection = () => {
  const [noticeList, setNoticeList] = useState([])
  const [article, setArticle] = useState(null)

  const [opened, { open, close }] = useDisclosure(false)
  const { getBBSList } = useBoardApi()

  const handleGetBBSList = async () => {
    try {
      let { data } = await getBBSList()
      setNoticeList(data.BBSList.list.content)
    } catch {
      setNoticeList([])
    }
  }

  const handleNoticeClick = row => {
    setArticle(row)
    open()
  }

  useEffect(() => {
    handleGetBBSList()
  }, [])

  return (
    <Container py={50} fluid bg={'dark.7'} id="notice">
      {/* 팝업 */}
      <NoticePopup opened={opened} onClose={close} article={article} />

      <Title order={3} c="white" fw={700} m={'auto'} mb={20} maw={1000}>
        공지사항 & 이벤트
      </Title>

      <ScrollArea maw={1000} h={350} m={'auto'} py={20} scrollbars="y" scrollbarSize={10} classNames={classes}>
        <Flex direction="column" gap={20}>
          {noticeList.map(article => (
            <Group key={article?.boardSeq} align="center">
              {article?.type === 'new' && (
                <Badge color={'teal'} size="sm" miw={60}>
                  NEW
                </Badge>
              )}
              {article?.type === 'event' && (
                <Badge color={'cyan'} size="sm" miw={60}>
                  EVENT
                </Badge>
              )}
              {article?.type === 'normal' && <Box miw={60} />}
              <Box
                className={classes.title_section}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  handleNoticeClick(article)
                }}
              >
                <Text size="sm" c="white" fw={700} lineClamp={1}>
                  {article?.boardSeq}. {article?.title}
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
