import { Card, Flex, Modal, Stack, Text } from '@mantine/core'

const DetailModalUI = ({ ...props }) => {
  const { detailOpened, detailOpen, detailClose, modalTitle, setModalTitle } = props

  return (
    <Modal
      opened={detailOpened}
      onClose={detailClose}
      closeOnClickOutside={false}
      title={modalTitle}
      centered
      size={'xl'}
    >
      <Stack>
        <Card>
          <Flex justify={'space-between'}>
            <Text>첨부파일: </Text>
            <Text>작성일: 2024-07-18</Text>
          </Flex>
        </Card>
        <Flex direction={'column'}>
          <Text fw={600}>Question.</Text>
          <Card w={'100%'} h={'300px'} p={10} style={{ borderRadius: 4 }}>
            <p>14번 문제가 이해가 잘 안갑니다.</p>
            <p>어떻게하면 수학 고수가 되나요?</p>
            <p>퀄럽처럼 되고싶어요</p>
          </Card>
          <Text fw={600} mt={20}>
            Answer.
          </Text>
          <Card w={'100%'} h={'300px'} p={10} style={{ borderRadius: 4 }}>
            <p>하하 열심히 해보세요</p>
          </Card>
        </Flex>
      </Stack>
    </Modal>
  )
}

export default DetailModalUI
