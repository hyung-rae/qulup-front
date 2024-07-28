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
        <Group justify="flex-end">
          <SegmentedControl
            size="md"
            value={tabValue}
            defaultValue="buy"
            data={[
              { label: '구매목록', value: 'buy' },
              { label: '즐겨찾기', value: 'favorite' },
            ]}
            onClick={e => {
              setTabValue(e.target.value)
            }}
            w={300}
            withItemsBorders={false}
            color="dark"
          />
        </Group>
        <Group style={{ position: 'relative' }} py={30} justify="space-between">
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
          <Pagination total={3} color="dark.3" />
          {tabValue === 'buy' ? (
            <Button w={120} onClick={handleReQuest}>
              문제 재요청
            </Button>
          ) : (
            <Button w={120} onClick={handleBuy}>
              구매
            </Button>
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
          px="0"
          py="0"
        />
      </Flex>
    </Container>
  )
}

export default ProblemsManageUI
