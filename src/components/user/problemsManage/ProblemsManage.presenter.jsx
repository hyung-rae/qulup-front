import { Button, Container, Flex, Group, Pagination, SegmentedControl, Text } from '@mantine/core'
import Cards from './cards/Cards.container'

const ProblemsManageUI = ({ ...props }) => {
  const {
    checkedList,
    setCheckedList,
    heartList,
    handleDetailClick,
    handleProblemClick,
    handleHeartClick,
    tabValue,
    setTabValue,
    handleReQuest,
    handleBuy,
    handleAllCheck,
    data,
  } = props
  return (
    <Container bg="gray.3" fluid pb="xl" mih={'100vh'}>
      <Flex direction="column" maw={1920} m="auto">
        <Flex justify={'space-between'} p={16}>
          <Group>
            <SegmentedControl
              value={tabValue}
              defaultValue="buy"
              data={[
                { label: '구매목록', value: 'buy' },
                { label: '즐겨찾기', value: 'favorite' },
              ]}
              onClick={e => {
                setTabValue(e.target.value)
              }}
            />
          </Group>

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
        <Group pl={16} pt={16}>
          <Button onClick={handleAllCheck}>전체 선택</Button>
          {checkedList.length > 0 && (
            <>
              <Button onClick={() => setCheckedList([])}>전체 해제</Button>
              <Text>선택문항: {checkedList.length}</Text>
            </>
          )}
        </Group>

        <Cards
          heartList={heartList}
          handleProblemClick={handleProblemClick}
          handleDetailClick={handleDetailClick}
          handleHeartClick={handleHeartClick}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          data={data}
        />
        <Group w={'100%'} justify="center">
          <Pagination total={10} color="dark.3" />
        </Group>
      </Flex>
    </Container>
  )
}

export default ProblemsManageUI
