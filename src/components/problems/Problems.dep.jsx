import {
  Button,
  Container,
  Flex,
  Group,
  Modal,
  Pagination,
  Select,
  MultiSelect,
  TextInput,
  Text,
  Title,
  Card,
} from '@mantine/core'
import ArticlesCardsGrid from './ArticlesCardsGrid'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { IconSearch } from '@tabler/icons-react'
import GlobalModal from '@/src/components/globalModal'
import { Carousel } from '@mantine/carousel'

import { ACADEMY_FILTER, PROBLEM_FILTER, SEARCH_FILTER } from '@/src/components/problems/SelectFilter'
import { PROBLEM_DATA, RECOMMEND_DATA } from '@/src/mock-data/dummy'
// import ProblemsUI from '../user/problems/Problems.container'

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
      <Modal opened={detailOpened} size={'1920'} onClose={detailClose} title={'문제 상세보기'} centered>
        <Flex gap={40}>
          <Flex direction="column" gap={20} w={'100%'}>
            <Text size="18px" fw={700}>
              문제
            </Text>
            <Card>123</Card>
            <Text size="18px" fw={700}>
              해설
            </Text>
            <Card>123</Card>
            <Text size="18px" fw={700}>
              정답
            </Text>
            <Card>
              #수열의 귀납적 정의, #곡선으로 정의된 수열, #교점 찾기, #케이스 분류, #등차수열, #등차수열의 합, #그래프로
              정의된 수열
            </Card>
          </Flex>
          <Flex direction="column" gap={20} w={'100%'}>
            <Text size="18px" fw={700}>
              추천 리스트
            </Text>
            <ArticlesCardsGrid col={2} width={'100%'} px="0" py="0" data={RECOMMEND_DATA} onClick={() => {}} />
          </Flex>
        </Flex>
      </Modal>
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

          <Carousel
            slideSize={{ base: '100%', sm: '50%' }}
            slideGap={0}
            align="center"
            // loop
            controlSize={40}
          >
            <ArticlesCardsGrid
              data={PROBLEM_DATA}
              heartList={heartList}
              handleProblemClick={handleProblemClick}
              handleDetailClick={handleDetailClick}
              handleHeartClick={handleHeartClick}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
            <ArticlesCardsGrid
              data={PROBLEM_DATA}
              heartList={heartList}
              handleProblemClick={handleProblemClick}
              handleDetailClick={handleDetailClick}
              handleHeartClick={handleHeartClick}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
            <ArticlesCardsGrid
              data={PROBLEM_DATA}
              heartList={heartList}
              handleProblemClick={handleProblemClick}
              handleDetailClick={handleDetailClick}
              handleHeartClick={handleHeartClick}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
            <ArticlesCardsGrid
              data={PROBLEM_DATA}
              heartList={heartList}
              handleProblemClick={handleProblemClick}
              handleDetailClick={handleDetailClick}
              handleHeartClick={handleHeartClick}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
          </Carousel>

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
