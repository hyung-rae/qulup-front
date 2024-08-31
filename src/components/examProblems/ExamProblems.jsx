import { ACADEMY_FILTER, PROBLEM_FILTER, SEARCH_FILTER } from '@/src/components/problems/SelectFilter'
import { Center, Container, Flex, Group, MultiSelect, Pagination, Select, Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import ExamProblemsItem from './ExamProblemsItem'
import { examProblemsData } from './mock'
import useProblemApi from '@/src/api/problem/useProblemApi'

const ExamProblems = () => {
  const [page, setPage] = useState(1)
  const [examProblemsList, setExamProblemsList] = useState([])

  const [placeholder, setPlaceholder] = useState({
    academy: true,
    problem: true,
  })
  const [searchText, setSearchText] = useState('')

  const { getExamProblemList, getExamProblemSearch } = useProblemApi()

  const handleSearch = async () => {
    // TODO: 모의고사 문제 검색하는 로직
    // let res = await getExamProblemSearch(page)
    // setExamProblemsList(res.list)
  }

  const handleGetExamProblemsData = async page => {
    // TODO: 모의고사 문제 리스트 불러오는 로직
    let res = await getExamProblemList(page)
    console.log('res: ', res)
    // setExamProblemsList(res.list)
  }

  // 페이지가 최초로 랜더링될때 / page가 변경될때마다 문제를 불러오는 함수 실행
  useEffect(() => {
    handleGetExamProblemsData(page)
  }, [page])

  return (
    <Container bg="gray.3" maw={1700} fluid p="xl" mih={'100vh'}>
      <Flex direction="column" m="auto" gap={20}>
        <Group align="flex-start" justify="space-between">
          <Group justify="flex-end" align="flex-end">
            {/* <MultiSelect
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
            /> */}

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
          <Pagination color="dark" total={5} page={page} onChange={setPage} />
        </Group>
        {examProblemsData.map((article, index) => {
          return <ExamProblemsItem key={index} article={article} />
        })}
      </Flex>
    </Container>
  )
}

export default ExamProblems
