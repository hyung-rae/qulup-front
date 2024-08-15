import { Card, Flex, Modal, Text } from '@mantine/core'
import Cards from '../cards/Cards.container'

const DetailModalUI = ({ ...props }) => {
  const { detailOpened, detailClose, articleId, problemsData, handleRecommendClick } = props
  const problemData = problemsData.find(el => el.problemSeq === articleId)

  if (!problemData) return

  return (
    <Modal opened={detailOpened} size={'1920'} onClose={detailClose} title={`${articleId}번 문제 상세보기`} centered>
      <Flex gap={40}>
        <Flex direction="column" gap={20} w={'100%'}>
          <Text size="18px" fw={700}>
            문제
          </Text>
          <Card bg={'gray.1'}>{problemData?.problemImage}</Card>
          <Text size="18px" fw={700}>
            해설
          </Text>
          <Card bg={'gray.1'}>{problemData?.problemSolution}</Card>
          <Text size="18px" fw={700}>
            정답
          </Text>
          <Card bg={'gray.1'}>{problemData?.answer}</Card>
          <Text size="18px" fw={700}>
            태그
          </Text>
          <Card bg={'gray.1'}>{problemData?.tag}</Card>
        </Flex>
        <Flex direction="column" gap={20} w={'100%'}>
          <Text size="18px" fw={700}>
            추천 리스트
          </Text>
          <Card bg={'gray.1'}>
            <Cards
              col={2}
              width={'100%'}
              px="0"
              py="0"
              problemsData={problemsData}
              detailModal={true}
              onClick={handleRecommendClick}
            />
          </Card>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default DetailModalUI
