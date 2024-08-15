import {
  Button,
  Checkbox,
  Container,
  Flex,
  Group,
  MultiSelect,
  Pagination,
  Select,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import Cards from './cards/Cards.container'

import { ACADEMY_FILTER, PROBLEM_FILTER, SEARCH_FILTER } from '@/src/components/problems/SelectFilter'

const ProblemsUI = ({ ...props }) => {
  const {
    checkedList,
    setCheckedList,
    searchText,
    setSearchText,
    handleSearch,
    heartList,
    handleAllCheck,
    handleDetailClick,
    handleProblemClick,
    placeholder,
    setPlaceholder,
    problemsData = [],
    page,
    setPage,
    totalCount,
  } = props

  return (
    <Container bg="gray.3" fluid p="xl" mih={'100vh'} maw={1700}>
      <Flex direction="column" maw={1920} m="auto" gap={20}>
        <Group justify="space-between" align="flex-end">
          <Group justify="flex-end" align="flex-end">
            <MultiSelect
              miw={200}
              data={ACADEMY_FILTER}
              placeholder={placeholder.academy ? '제외 학원' : ''}
              onChange={e => {
                setPlaceholder(prev => {
                  return { ...prev, academy: !(e.length > 0) }
                })
              }}
            />
            <MultiSelect
              miw={200}
              placeholder={placeholder.problem ? '제외 단원' : ''}
              data={PROBLEM_FILTER}
              onChange={e => {
                setPlaceholder(prev => {
                  return { ...prev, problem: !(e.length > 0) }
                })
              }}
              comboboxProps={{ width: 200, position: 'bottom-end' }}
            />
            <Group gap={5} align="flex-end">
              <Select
                placeholder="검색타입"
                data={SEARCH_FILTER}
                w={100}
                defaultValue="all"
                allowDeselect={false}
                withCheckIcon={false}
              />
              <TextInput
                value={searchText}
                placeholder="검색어를 입력해주세요"
                onChange={e => setSearchText(e.target.value)}
                rightSection={<IconSearch width={16} height={16} onClick={handleSearch} cursor={'pointer'} />}
              />
            </Group>
          </Group>
          <Pagination total={totalCount / 12 + 1} color="dark" page={page} onChange={setPage} />
        </Group>
        <Flex justify={'space-between'} align={'center'}>
          <Group style={{ position: 'relative' }}>
            <Checkbox
              size="md"
              color="dark"
              indeterminate={checkedList.length > 0 && checkedList.length !== totalCount}
              onChange={e => {
                e.target.checked ? handleAllCheck() : setCheckedList([])
              }}
            />
            <Title order={5}>
              선택한 문제
              <Text component="span" c="teal" inherit mx={5}>
                {checkedList.length || 0}
              </Text>
              건
            </Title>
            {checkedList.length > 0 && (
              <Button size="xs" color="dark">
                구매하기
              </Button>
            )}
            <Button variant="subtle" size="xs" color="dark">
              전체 상품 구매하기
            </Button>
          </Group>
        </Flex>

        <Cards
          problemsData={problemsData}
          heartList={heartList}
          handleProblemClick={handleProblemClick}
          handleDetailClick={handleDetailClick}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          px="0"
          py="0"
        />
      </Flex>
    </Container>
  )
}

export default ProblemsUI
