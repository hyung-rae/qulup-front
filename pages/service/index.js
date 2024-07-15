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
} from '@mantine/core'
import Tab from '@/src/components/tab/Tab'
import { useDisclosure } from '@mantine/hooks'
import { FAQ_DEFAULT, INQUIRY_DEFAULT } from './dummy'
import { IconSearch } from '@tabler/icons-react'
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
          <Flex justify={'center'}>
            <Text>작성제목</Text>
          </Flex>
          <Flex justify={'space-between'}>
            <Text>첨부파일</Text>
            <Text>작성날짜</Text>
          </Flex>
          <Flex direction={'column'}>
            <Box w={'100%'} h={'300px'} bg={'gray'}>
              내용
            </Box>
            <Box w={'100%'} h={'300px'}>
              답변
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

      <Container>
        <Tab contents={temp} defaultValue={'faq'} setTabValue={setTabValue} style={{ paddingBottom: '20px' }} />
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
          <Table verticalSpacing="xs">
            <Table.Thead>
              <Table.Tr style={{ color: '#000000' }}>
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
        </Table.ScrollContainer>
        <Flex w={'100%'} mt={20} justify="center">
          <Pagination total={10} color="red" />
        </Flex>
      </Container>
    </>
  )
}

export default Service
