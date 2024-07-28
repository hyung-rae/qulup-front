import classes from '@/src/components/service/Service.module.css'
import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Pagination,
  Paper,
  SegmentedControl,
  Table,
  TextInput,
} from '@mantine/core'

import { IconSearch } from '@tabler/icons-react'

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
    handleGetBoardData,
  } = props

  const FAQ_ROWS = faq_data.map(row => {
    return (
      <Table.Tr className={classes.tr} key={`faq_${row.id}`} onClick={() => handleFaqClick(row)}>
        <Table.Td align="center">{row.id}</Table.Td>
        <Table.Td align="center">{row.title}</Table.Td>
        <Table.Td>{row.created_at}</Table.Td>
      </Table.Tr>
    )
  })
  const INQUIRY_ROWS = inquiry_data.map(row => {
    return (
      <>
        <Table.Tr className={classes.tr} key={`inquiry_${row.id}`} onClick={() => handleInquiryClick(row)}>
          <Table.Td align="center">{row.id}</Table.Td>
          <Table.Td align="center">{row.writer}</Table.Td>
          <Table.Td align="center">{row.state}</Table.Td>
          <Table.Td>{row.created_at}</Table.Td>
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
    <Container bg="gray.3" fluid p="xl" mih={'100vh'}>
      <Flex direction="column" maw={1200} m="auto" gap={20}>
        <Table.ScrollContainer>
          <Flex justify="space-between" w={'100%'} gap={10} mb={20}>
            <SegmentedControl
              value={tabValue}
              defaultValue="faq"
              data={[
                { label: 'FAQ', value: 'faq' },
                { label: '1:1 문의', value: 'inquiry' },
              ]}
              onClick={e => {
                setTabValue(e.target.value)
              }}
            />
            <Group>
              {tabValue === 'inquiry' && <Button onClick={writingOpen}>글쓰기</Button>}
              <TextInput
                value={searchText}
                placeholder="검색어를 입력해주세요"
                onChange={e => setSearchText(e.target.value)}
                rightSection={<IconSearch width={16} height={16} onClick={handleSearch} cursor={'pointer'} />}
              />
            </Group>
          </Flex>
          <Paper m="auto" shadow="xs" withBorder p="xl" w={'100%'}>
            <Table verticalSpacing="xs">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ textAlign: 'center' }} width={50}>
                    No.
                  </Table.Th>
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
              <Table.Tbody>
                {tabValue === 'faq' && faq_data.length > 0 && FAQ_ROWS}
                {tabValue === 'inquiry' && inquiry_data.length > 0 && INQUIRY_ROWS}
              </Table.Tbody>
            </Table>
            {(tabValue === 'faq' && faq_data.length === 0) || (tabValue === 'inquiry' && inquiry_data.length === 0)
              ? EMPTY_ROWS
              : null}
          </Paper>
        </Table.ScrollContainer>
        <Flex w={'100%'} mt={20} justify="center" align={'center'}>
          <Pagination
            total={totalCount / 10}
            color="dark.3"
            onChange={page => {
              handleGetBoardData(page)
            }}
          />
        </Flex>
      </Flex>
    </Container>
  )
}
export default ServiceUI
