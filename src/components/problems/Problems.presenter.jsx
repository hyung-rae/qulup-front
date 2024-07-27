import { Button, Container, Flex, Group, MultiSelect, Pagination, Select, Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import Cards from './cards/Cards.container'

import { ACADEMY_FILTER, PROBLEM_FILTER, SEARCH_FILTER } from '@/src/components/problems/SelectFilter'
import { PROBLEM_DATA } from '@/src/mock-data/dummy'

const ProblemsUI = ({ ...props }) => {
  const {
    checkedList,
    setCheckedList,
    searchText,
    setSearchText,
    handleSearch,
    heartList,
    setHeartList,
    handleDetailClick,
    handleProblemClick,
    handleHeartClick,
  } = props
  return (
    <Container bg="gray.3" fluid p="xl" mih={'100vh'}>
      <Flex direction="column" maw={1920} m="auto" gap={20}>
        <Group justify="space-between" align="flex-end">
          <Group>
            <Button>전체 선택</Button>

            {checkedList.length > 0 && (
              <>
                <Button onClick={() => setCheckedList([])}>전체 해제</Button>
                <Text>선택문항: {checkedList.length}</Text>
              </>
            )}
          </Group>
          <Group justify="flex-end" align="flex-end">
            <MultiSelect miw={200} label="제외 학원" data={ACADEMY_FILTER} />
            <MultiSelect
              miw={200}
              label="제외 단원"
              data={PROBLEM_FILTER}
              comboboxProps={{ width: 200, position: 'bottom-end' }}
            />
            <Group gap={5} align="flex-end">
              <Select
                label="문제 검색"
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

        <Cards
          data={PROBLEM_DATA}
          heartList={heartList}
          handleProblemClick={handleProblemClick}
          handleDetailClick={handleDetailClick}
          handleHeartClick={handleHeartClick}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />

        <Flex justify={'space-between'} p={16}>
          <Button w={120} style={{ cursor: 'default' }} opacity={0}></Button>
          <Pagination total={10} color="dark.3" />
          <Button w={120}>구매</Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default ProblemsUI
