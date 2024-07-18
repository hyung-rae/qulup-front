import { Button, Container, Flex, Group, Modal, Pagination, Select, MultiSelect, TextInput, Text } from '@mantine/core'
import ArticlesCardsGrid from '../../src/components/problems/ArticlesCardsGrid'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { IconSearch } from '@tabler/icons-react'
import GlobalModal from '@/src/components/globalModal'

const ACADEMY_FILTER = [
  { value: '대성', label: '대성' },
  { value: '청솔', label: '청솔' },
  { value: '혁훈', label: '혁훈' },
  { value: '정빈', label: '정빈' },
]

const PROBLEM_FILTER = [
  {
    group: '수1',
    items: [
      { value: '0', label: '지수함수와 로그함수' },
      { value: '1', label: '삼각함수' },
      { value: '2', label: '수열' },
    ],
  },
  {
    group: '수2',
    items: [
      { value: '3', label: '함수의 극한과 연속' },
      { value: '4', label: '미분' },
      { value: '5', label: '적분' },
    ],
  },
  {
    group: '미적분',
    items: [
      { value: '6', label: '수열의 극한' },
      { value: '7', label: '미분법' },
      { value: '8', label: '적분법' },
    ],
  },
]

const SEARCH_FILTER = [
  { value: 'all', label: '전체' },
  { value: 'name', label: '문제명' },
  { value: 'code', label: '코드' },
]

const Problems = () => {
  const handleDetailClick = id => {
    detailOpen()
  }
  const handleProblemClick = id => {
    if (checkedList.includes(id)) {
      setCheckedList(checkedList.filter(item => item !== id))
    } else {
      setCheckedList(prev => [...prev, id])
    }
  }
  const handleHeartClick = id => {
    if (heartList.includes(id)) {
      setHeartList(heartList.filter(item => item !== id))
    } else {
      setHeartList(prev => [...prev, id])
    }
  }

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)

  const [searchText, setSearchText] = useState('')
  const [heartList, setHeartList] = useState([])
  const [checkedList, setCheckedList] = useState([])

  const handleSearch = () => {}
  // const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={detailOpened} size={'lg'} onClose={detailClose} title={'문제 상세보기'} centered></Modal>

      <Container bg="gray.3" fluid p="xl" mih={'100vh'}>
        <Flex direction="column" maw={1920} m="auto" gap={20}>
          <Group m={16} justify="space-between" align="flex-end">
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
              <Select label="학원 소속" placeholder="학원 소속" data={ACADEMY_FILTER} />
              <MultiSelect
                miw={200}
                label="단원"
                data={PROBLEM_FILTER}
                comboboxProps={{ width: 200, position: 'bottom-end' }}
              />
              <Group gap={5} align="flex-end">
                <Select label="문제 검색" placeholder="검색타입" data={SEARCH_FILTER} w={100} />
                <TextInput
                  value={searchText}
                  placeholder="검색어를 입력해주세요"
                  onChange={e => setSearchText(e.target.value)}
                  rightSection={<IconSearch width={16} height={16} onClick={handleSearch} cursor={'pointer'} />}
                />
              </Group>
            </Group>
          </Group>
          <ArticlesCardsGrid
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
    </>
  )
}

export default Problems
