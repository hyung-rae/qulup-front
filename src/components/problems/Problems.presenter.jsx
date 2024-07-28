import { Box, Button, Container, Flex, Group, MultiSelect, Pagination, Select, Text, TextInput } from '@mantine/core'
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
    handleHeartClick,
    placeholder,
    setPlaceholder,
    problemsData = [],
    page,
    setPage,
  } = props

  return (
    <Container bg="gray.3" fluid p="xl" mih={'100vh'} maw={1700}>
      <Flex direction="column" maw={1920} m="auto" gap={20}>
        <Group justify="space-between" align="flex-end">
          <Text fz={26} fw={900} variant="gradient" gradient={{ from: 'gray', to: 'dark', deg: 0 }}>
            전체 문제
          </Text>
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
        </Group>
        <Flex justify={'space-between'} align={'center'}>
          <Group style={{ position: 'relative' }} py={20}>
            <Button w={100} onClick={handleAllCheck}>
              전체 선택
            </Button>
            {checkedList.length > 0 && (
              <Flex align={'center'} justify={'center'} gap={20} style={{ position: 'absolute', left: 110 }}>
                <Button w={100} onClick={() => setCheckedList([])}>
                  전체 해제
                </Button>
                <Text w={100}>선택문항: {checkedList.length}</Text>
              </Flex>
            )}
          </Group>
          <Pagination total={5} color="dark.3" page={page} onChange={setPage} />
          <Button w={120}>구매</Button>
        </Flex>

        <Cards
          problemsData={problemsData}
          heartList={heartList}
          handleProblemClick={handleProblemClick}
          handleDetailClick={handleDetailClick}
          handleHeartClick={handleHeartClick}
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
