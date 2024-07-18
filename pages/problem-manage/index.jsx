import { Button, Container, Flex, Group, Modal, Pagination, Select, MultiSelect, TextInput, Text } from '@mantine/core'
import ArticlesCardsGrid from './ArticlesCardsGrid'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import Request from './Request'

import Tab from '@/src/components/tab/Tab'

const TAB = [
  { title: '구매목록', value: 'buy', icon: null },
  { title: '즐겨찾기', value: 'favorite', icon: null },
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
  const [reQuestOpened, { open: reQuestOpen, close: reQuestClose }] = useDisclosure(false)

  const [heartList, setHeartList] = useState([])
  const [checkedList, setCheckedList] = useState([])
  const [tabValue, setTabValue] = useState('buy') // buy or favorite

  const handleReQuest = () => {
    reQuestOpen()
  }
  const handleBuy = () => {}

  // TODO: total buy, favorite length 아래에 반영
  const additionalData = {
    buy: 10,
    favorite: 20,
  }

  return (
    <>
      <Modal opened={detailOpened} size={'lg'} onClose={detailClose} title={'문제 상세보기'} centered></Modal>
      <Modal opened={reQuestOpened} size={'lg'} onClose={reQuestClose} title={'문제 재요청'} centered>
        <Request reQuestClose={reQuestClose} />
      </Modal>

      <Container bg="dark.9" fluid p="xl" mih={'100vh'}>
        <Flex direction="column" maw={1920} m="auto" gap={20}>
          <Tab
            contents={TAB}
            defaultValue={'buy'}
            setTabValue={setTabValue}
            style={{ width: '100%', padding: '32px 16px 0' }}
            additionalData={additionalData}
          />
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
            {tabValue === 'buy' ? (
              <Button w={120} onClick={handleReQuest}>
                문제 재요청
              </Button>
            ) : (
              <Button w={120} onClick={handleBuy}>
                구매
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Problems
