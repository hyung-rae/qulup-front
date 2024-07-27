import { Card, Flex, Modal, Text } from '@mantine/core'
import Cards from '../cards/Cards.container'
import { RECOMMEND_DATA } from '@/src/mock-data/dummy'

const DetailModalUI = ({ ...props }) => {
  const { detailOpened, detailClose } = props
  return (
    <Modal opened={detailOpened} size={'1920'} onClose={detailClose} title={'문제 상세보기'} centered>
      <Flex gap={40}>
        <Flex direction="column" gap={20} w={'100%'}>
          <Text size="18px" fw={700}>
            문제
          </Text>
          <Card bg={'gray.1'}>1asa</Card>
          <Text size="18px" fw={700}>
            해설
          </Text>
          <Card bg={'gray.1'}>1asa</Card>
          <Text size="18px" fw={700}>
            정답
          </Text>
          <Card bg={'gray.1'}>3</Card>
          <Text size="18px" fw={700}>
            태그
          </Text>
          <Card bg={'gray.1'}>
            #수열의 귀납적 정의, #곡선으로 정의된 수열, #교점 찾기, #케이스 분류, #등차수열, #등차수열의 합, #그래프로
            정의된 수열
          </Card>
        </Flex>
        <Flex direction="column" gap={20} w={'100%'}>
          <Text size="18px" fw={700}>
            추천 리스트
          </Text>
          <Card bg={'gray.1'}>
            <Cards col={2} width={'100%'} px="0" py="0" data={RECOMMEND_DATA} onClick={() => {}} />
          </Card>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default DetailModalUI
