import { Card, Flex, Modal, Text } from '@mantine/core'
import Cards from '../cards/Cards.container'
import { useRouter } from 'next/router'

const DetailModalUI = ({ ...props }) => {
  const { detailOpened, detailClose, articleId, problemsData, handleRecommendClick } = props
  const problemData = problemsData.find(el => el.problemSeq === articleId)

  if (!problemData) return
  const { basePath } = useRouter()

  return (
    <Modal opened={detailOpened} size={'1920'} onClose={detailClose} title={`${articleId}번 문제 상세보기`} centered>
      <Flex gap={40}>
        <Flex direction="column" gap={20} w={'100%'}>
          <Text size="18px" fw={700}>
            문제
          </Text>
          <Card style={{ maxHeight: '500px', overflow: 'scroll' }} bg={'gray.1'}>
            {/* {problemData?.problemImage} */}
            <img src={`${basePath}/images/question_example.png`} />
          </Card>
          <Text size="18px" fw={700}>
            해설
          </Text>
          <Card style={{ maxHeight: '500px', overflow: 'scroll' }} bg={'gray.1'}>
            {problemData?.problemSolution}
            <img src={`${basePath}/images/answer_example01.png`} />
            <img src={`${basePath}/images/answer_example02.png`} />
            <img src={`${basePath}/images/answer_example03.png`} />
          </Card>
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
