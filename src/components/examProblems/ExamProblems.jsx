import { Box, Container, Flex, Group, MultiSelect, SegmentedControl, Select, Text, TextInput } from '@mantine/core'
import ExamProblemsItem from './ExamProblemsItem'
import { ACADEMY_FILTER, PROBLEM_FILTER, SEARCH_FILTER } from '@/src/components/problems/SelectFilter'
import { useState } from 'react'
const Gemstone = () => {
  const [placeholder, setPlaceholder] = useState({
    academy: true,
    problem: true,
  })
  const [searchText, setSearchText] = useState('')

  return (
    <Container bg="gray.3" maw={1700} fluid p="xl" mih={'100vh'}>
      <Flex direction="column" m="auto" gap={20}>
        <Group align="flex-start" justify="space-between">
          <Text fz={26} fw={900} variant="gradient" gradient={{ from: 'gray', to: 'dark', deg: 0 }}>
            모의고사 문제
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
        <ExamProblemsItem />
        <ExamProblemsItem />
        <ExamProblemsItem />
      </Flex>
    </Container>
  )
}

export default Gemstone
