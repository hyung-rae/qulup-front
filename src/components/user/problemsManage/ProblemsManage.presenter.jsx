import { Button, Container, Flex, Pagination } from '@mantine/core'
import Cards from './cards/Cards.container'

import Tab from '@/src/components/tab/Tab'
import { PROBLEM_DATA } from '@/src/mock-data/dummy'
// TODO: total buy, favorite length 아래에 반영
const additionalData = {
  buy: 10,
  favorite: 20,
}

const TAB = [
  { title: '구매목록', value: 'buy', icon: null },
  { title: '즐겨찾기', value: 'favorite', icon: null },
]

const ProblemsManageUI = ({ ...props }) => {
  const {
    checkedList,
    setCheckedList,
    heartList,
    setHeartList,
    handleDetailClick,
    handleProblemClick,
    handleHeartClick,
    tabValue,
    setTabValue,
    handleReQuest,
    handleBuy,
  } = props
  return (
    <Container bg="gray.3" fluid p="xl" mih={'100vh'}>
      <Flex direction="column" maw={1920} m="auto" gap={20}>
        <Tab
          contents={TAB}
          defaultValue={'buy'}
          setTabValue={setTabValue}
          style={{ width: '100%', padding: '32px 16px 0' }}
          additionalData={additionalData}
        />

        <Cards
          heartList={heartList}
          handleProblemClick={handleProblemClick}
          handleDetailClick={handleDetailClick}
          handleHeartClick={handleHeartClick}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          data={PROBLEM_DATA}
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
  )
}

export default ProblemsManageUI
