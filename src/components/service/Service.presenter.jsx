import classes from '@/src/components/service/Service.module.css'
import { Button, Container, Flex, Group, SegmentedControl, Pagination, Paper, Table, TextInput } from '@mantine/core'

import Tab from '@/src/components/tab/Tab'
import { FAQ_DEFAULT, INQUIRY_DEFAULT } from '@/src/mock-data/dummy'
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
  } = props

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
          <Table.Td align="center">{row.name}</Table.Td>
          <Table.Td align="center">{row.state}</Table.Td>
          <Table.Td>{row.created_at}</Table.Td>
        </Table.Tr>
      </>
    )
  })

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
          <Paper m="auto" shadow="xs" withBorder p="xl">
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
              <Table.Tbody>{tabValue === 'faq' ? FAQ_ROWS : INQUIRY_ROWS}</Table.Tbody>
            </Table>
          </Paper>
        </Table.ScrollContainer>
        <Flex w={'100%'} mt={20} justify="center">
          <Pagination total={10} color="dark.3" />
        </Flex>
      </Flex>
    </Container>
  )
}
export default ServiceUI
