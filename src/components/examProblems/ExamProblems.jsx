import { ACADEMY_FILTER, PROBLEM_FILTER, SEARCH_FILTER } from '@/src/components/problems/SelectFilter'
import { Center, Container, Flex, Group, MultiSelect, Pagination, Select, Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import ExamProblemsItem from './ExamProblemsItem'

const Gemstone = () => {
  const [placeholder, setPlaceholder] = useState({
    academy: true,
    problem: true,
  })
  const [searchText, setSearchText] = useState('')
  const handleSearch = () => {}

  let mock = [
    {
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      state: 'done',
      title: 'technology',
      description: 'The best laptop for Frontend engineers in 2022',
      price: 58000,
    },
    {
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      state: 'done',
      title: 'technology',
      description: 'The best laptop for Frontend engineers in 2022',
      price: 58000,
    },
    {
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      state: 'done',
      title: 'technology',
      description: 'The best laptop for Frontend engineers in 2022',
      price: 58000,
    },
  ]

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
        <Center mt="auto">
          <Pagination total={5} />
        </Center>
        {mock.map((article, index) => {
          return <ExamProblemsItem key={index} article={article} />
        })}
      </Flex>
    </Container>
  )
}

export default Gemstone
