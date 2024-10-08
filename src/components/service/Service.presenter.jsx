import classes from '@/src/components/service/Service.module.css'
import {
  Button,
  Center,
  Container,
  Flex,
  Group,
  Pagination,
  Paper,
  SegmentedControl,
  Table,
  TextInput,
} from '@mantine/core'
import { IconSearch, IconNote, IconHandClick } from '@tabler/icons-react'
import { formatDate } from '@/src/js/script'

const ANSWER_TITLE = {
  wait: '대기중',
  done: '답변 완료',
}

const ServiceUI = ({ ...props }) => {
  const {
    tabValue,
    setTabValue,
    searchText,
    setSearchText,
    handleSearch,
    handleFaqClick,
    handleInquiryClick,
    writingOpen,
    faq_data = [],
    inquiry_data = [],
    totalCount,
    page,
    setPage,
  } = props

  const FAQ_ROWS = faq_data.map((row, i) => {
    return (
      <Table.Tr className={classes.tr} key={`faq_${i}`} onClick={() => handleFaqClick(row)}>
        <Table.Td align="center">{row.boardSeq}</Table.Td>
        <Table.Td align="center">{row.category}</Table.Td>
        <Table.Td align="center">{row.title}</Table.Td>
        <Table.Td align="center">{formatDate(row.createdDate)}</Table.Td>
      </Table.Tr>
    )
  })
  const INQUIRY_ROWS = inquiry_data.map((row, i) => {
    return (
      <>
        <Table.Tr className={classes.tr} key={`inquiry_${i}`} onClick={() => handleInquiryClick(row)}>
          <Table.Td align="center">{row.inquirySeq}</Table.Td>
          <Table.Td align="center">{row?.nm || '작성자'}</Table.Td>
          <Table.Td align="center">{row?.responseAt}</Table.Td>
          <Table.Td align="center">{formatDate(row?.writtenDate)}</Table.Td>
        </Table.Tr>
      </>
    )
  })

  const EMPTY_ROWS = (
    <Flex w={'100%'} h={400} justify="center" align={'center'}>
      데이터가 없습니다.
    </Flex>
  )

  return (
    <Container bg="gray.3" maw={1700} fluid p="xl" mih={'100vh'}>
      <Flex direction="column" m="auto" gap={20}>
        <Table.ScrollContainer>
          <Group align="center" justify="space-between" mb={20}>
            <SegmentedControl
              size="md"
              value={tabValue}
              defaultValue="faq"
              data={[
                {
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconNote />
                      <span>FAQ</span>
                    </Center>
                  ),
                  value: 'faq',
                },
                {
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconHandClick />
                      <span>1:1 문의</span>
                    </Center>
                  ),
                  value: 'inquiry',
                },
              ]}
              onClick={e => {
                setTabValue(e.target.value)
              }}
              w={300}
              withItemsBorders={false}
              color="dark"
            />
            <Group>
              <TextInput
                value={searchText}
                placeholder="검색어를 입력해주세요"
                onChange={e => setSearchText(e.target.value)}
                rightSection={<IconSearch width={16} height={16} onClick={handleSearch} cursor={'pointer'} />}
              />
              <Pagination total={totalCount / 10 + 1} color="dark." page={page} onChange={setPage} />
            </Group>
          </Group>
          <Paper m="auto" shadow="xs" withBorder p="md" w={'100%'}>
            {tabValue === 'inquiry' && (
              <Group justify="flex-end" mb={10}>
                <Button color="dark" onClick={writingOpen}>
                  글쓰기
                </Button>
              </Group>
            )}
            <Table verticalSpacing="xs">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ textAlign: 'center' }} width={50}>
                    No.
                  </Table.Th>
                  {tabValue === 'faq' && (
                    <Table.Th width={100} style={{ textAlign: 'center' }}>
                      카테고리
                    </Table.Th>
                  )}
                  <Table.Th style={{ textAlign: 'center' }}>{tabValue === 'inquiry' ? '작성자' : '제목'}</Table.Th>
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
              <Table.Tbody key={`table_${tabValue}`}>
                {tabValue === 'faq' && faq_data.length > 0 && FAQ_ROWS}
                {tabValue === 'inquiry' && inquiry_data.length > 0 && INQUIRY_ROWS}
              </Table.Tbody>
            </Table>
            {(tabValue === 'faq' && faq_data.length === 0) || (tabValue === 'inquiry' && inquiry_data.length === 0)
              ? EMPTY_ROWS
              : null}
          </Paper>
        </Table.ScrollContainer>
      </Flex>
    </Container>
  )
}
export default ServiceUI
