import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Group,
  Pagination,
  SegmentedControl,
  Text,
  Title,
} from '@mantine/core'
import Cards from './cards/Cards.container'
import { IconClockCheck, IconStarFilled } from '@tabler/icons-react'

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
    totalCount,
  } = props
  return (
    <Container bg="gray.3" fluid pb="xl" mih={'100vh'}>
      <Flex direction="column" maw={1920} m="auto">
        <Group justify="space-between">
          <SegmentedControl
            size="md"
            value={tabValue}
            defaultValue="buy"
            data={[
              {
                label: (
                  <Center style={{ gap: 10 }}>
                    <IconClockCheck style={{ width: 16, height: 16 }} />
                    <span>구매목록</span>
                  </Center>
                ),
                value: 'buy',
              },
              {
                label: (
                  <Center style={{ gap: 10 }}>
                    <IconStarFilled fill="gold" style={{ width: 16, height: 16 }} />
                    <span>즐겨찾기</span>
                  </Center>
                ),
                value: 'favorite',
              },
            ]}
            onClick={e => {
              setTabValue(e.target.value)
            }}
            w={300}
            withItemsBorders={false}
            color="dark"
          />
          <Pagination total={3} color="dark" />
        </Group>
        <Group style={{ position: 'relative' }} py={30} justify="space-between">
          <Group style={{ position: 'relative' }}>
            <Checkbox
              size="md"
              color="dark"
              indeterminate={checkedList.length > 0 && checkedList.length !== totalCount}
              onChange={e => {
                e.target.checked ? handleAllCheck() : setCheckedList([])
              }}
            />
            <Title order={5}>
              선택한 문제
              <Text component="span" c="teal" inherit mx={5}>
                {checkedList.length || 0}
              </Text>
              건
            </Title>

            {tabValue === 'buy' ? (
              <Button size="xs" onClick={handleReQuest}>
                문제 재요청
              </Button>
            ) : (
              <>
                {checkedList.length > 0 && (
                  <Button size="xs" color="dark">
                    구매하기
                  </Button>
                )}
                <Button variant="subtle" size="xs" color="dark">
                  전체 상품 구매하기
                </Button>
              </>
            )}
          </Group>
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
