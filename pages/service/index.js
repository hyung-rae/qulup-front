'use client'

import { useState } from 'react'

import dynamic from 'next/dynamic'

import classes from './Service.module.css'
import {
  Pagination,
  Table,
  Modal,
  Container,
  Stack,
  Flex,
  TextInput,
  FileInput,
  Button,
  Group,
  Text,
  Box,
  Paper,
} from '@mantine/core'
import Tab from '@/src/components/tab/Tab'
import { useDisclosure } from '@mantine/hooks'
import { FAQ_DEFAULT, INQUIRY_DEFAULT } from './dummy'
import { IconSearch } from '@tabler/icons-react'
import GlobalModal from '@/src/components/globalModal'
const TextEditor = dynamic(() => import('@/src/components/textEditor'), { ssr: false })

const temp = [
  { title: 'FAQ', value: 'faq', icon: null },
  { title: '1:1문의', value: 'inquiry', icon: null },
]
{
}
const Service = ({ props }) => {
  const [tabValue, setTabValue] = useState('faq') // faq or inquiry
  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)
  const [writingOpened, { open: writingOpen, close: writingClose }] = useDisclosure(false)
  const [modalTitle, setModalTitle] = useState('타이틀')
  const [editorHtml, setEditorHtml] = useState('')
  const [searchText, setSearchText] = useState('')

  const handleFaqClick = row => {
    console.log('faq row: ', row)
    setModalTitle(row.title)
    detailOpen()
  }
  const handleInquiryClick = row => {
    console.log('inquiry row: ', row)
    setModalTitle(row.title)
    detailOpen()
  }

  const handlePostData = () => {
    console.log('editorHtml: ', editorHtml)
  }

  const FAQ_ROWS = FAQ_DEFAULT.map(row => {
    return (
      <Table.Tr className={classes.tr} key={`faq_${row.id}`} onClick={() => handleFaqClick(row)}>
        <Table.Td align="center">{row.id}</Table.Td>
        <Table.Td align="center">{row.title}</Table.Td>
        <Table.Td>{row.created_at}</Table.Td>
      </Table.Tr>
    )
  })
  const INQUIRY_ROWS = INQUIRY_DEFAULT.map(row => {
    return (
      <>
        <Table.Tr className={classes.tr} key={`inquiry_${row.id}`} onClick={() => handleInquiryClick(row)}>
          <Table.Td align="center">{row.id}</Table.Td>
          <Table.Td align="center">{row.title}</Table.Td>
          <Table.Td align="center">{row.state}</Table.Td>
          <Table.Td>{row.created_at}</Table.Td>
        </Table.Tr>
      </>
    )
  })

  const handleSearch = () => {
    console.log(`검색: ${searchText}`)
  }

  return (
    <>
      {/* 상세글보기 모달 */}
      <Modal
        opened={detailOpened}
        onClose={detailClose}
        closeOnClickOutside={false}
        title={modalTitle}
        centered
        size={'xl'}
      >
        <Flex direction={'column'}>
          <Flex justify={'space-between'} bd={'1px solid dark.4'} p={10} style={{ borderRadius: 4 }} mb={10}>
            <Text>첨부파일: </Text>
            <Text>작성일: 2024-07-18</Text>
          </Flex>
          <Flex direction={'column'}>
            <Text fw={600}>Question.</Text>
            <Box w={'100%'} h={'300px'} p={10} bg={'dark.4'} style={{ borderRadius: 4, border: '1px solid #555' }}>
              <p>14번 문제가 이해가 잘 안갑니다.</p>
              <p>어떻게하면 수학 고수가 되나요?</p>
              <p>퀄럽처럼 되고싶어요</p>
            </Box>
            <Text fw={600} mt={20}>
              Answer.
            </Text>
            <Box w={'100%'} h={'300px'} p={10} style={{ borderRadius: 4, border: '1px solid #555' }}>
              <p>하하 열심히 해보세요</p>
            </Box>
          </Flex>
        </Flex>
      </Modal>

      {/* 글쓰기 모달 */}
      <Modal
        opened={writingOpened}
        onClose={writingClose}
        closeOnClickOutside={false}
        title={'문의하기'}
        centered
        size={'xl'}
      >
        <Stack>
          <Group>
            <TextInput w={'100%'} label="제목" placeholder="글 제목을 입력해주세요" />
            <FileInput w={'100%'} label="파일 업로드" placeholder="클릭하여 파일을 업로드" multiple />
          </Group>
          <Box>
            <TextEditor setEditorHtml={setEditorHtml} />
          </Box>
          <Group w={'100%'} justify="center">
            <Button w={'240px'} onClick={handlePostData}>
              글쓰기
            </Button>
            <Button
              w={'240px'}
              onClick={() => {
                if (confirm('작성했던 데이터가 모두 사라집니다. 취소하시겠습니까?')) {
                  setEditorHtml('')
                  writingClose()
                }
              }}
            >
              취소하기
            </Button>
          </Group>
        </Stack>
      </Modal>

      <Container bg="dark.9" fluid p="xl" mih={'100vh'}>
        <Flex direction="column" w={1200} m="auto" gap={20}>
          <Tab contents={temp} defaultValue={'faq'} setTabValue={setTabValue} style={{ padding: '20px 0' }} />
          <Table.ScrollContainer minWidth={800}>
            <Flex justify="end" w={'100%'} gap={10} mb={20}>
              {tabValue === 'inquiry' && <Button onClick={writingOpen}>글쓰기</Button>}
              <TextInput
                value={searchText}
                placeholder="검색어를 입력해주세요"
                onChange={e => setSearchText(e.target.value)}
                rightSection={<IconSearch width={16} height={16} onClick={handleSearch} cursor={'pointer'} />}
              />
            </Flex>
            <Paper m="auto" shadow="xs" withBorder p="xl">
              <Table verticalSpacing="xs">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th style={{ textAlign: 'center' }} width={50}>
                      No.
                    </Table.Th>
                    <Table.Th style={{ textAlign: 'center' }}>제목</Table.Th>
                    {tabValue === 'inquiry' && (
                      <Table.Th width={100} style={{ textAlign: 'center' }}>
                        답변 상태
                      </Table.Th>
                    )}
                    <Table.Th style={{ textAlign: 'center' }} width={100}>
                      작성일
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{tabValue === 'faq' ? FAQ_ROWS : INQUIRY_ROWS}</Table.Tbody>
              </Table>
            </Paper>
          </Table.ScrollContainer>
          <Flex w={'100%'} mt={20} justify="center">
            <Pagination total={10} color="dark.3" />
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Service
