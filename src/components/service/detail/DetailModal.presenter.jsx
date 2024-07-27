import { Card, Flex, Modal, Stack, Text } from '@mantine/core'

const DetailModalUI = ({ ...props }) => {
  const { detailOpened, detailOpen, detailClose, modalTitle, setModalTitle } = props

  return (
    <Modal
      opened={detailOpened}
      onClose={detailClose}
      closeOnClickOutside={false}
      title={modalTitle || '1:1 문의'}
      centered
      size={'xl'}
    >
      <Stack gap={0}>
        <Card style={{ borderBottom: '1px solid #eee' }} p={'16px 0'}>
          <Flex justify={'space-between'} p={0}>
            <Text>작성자: 김정빈</Text>
            <Text fw={700} size="14px">
              작성일: 2024-07-18
            </Text>
          </Flex>
        </Card>
        <Flex direction={'column'}>
          <Card w={'100%'} p={10}>
            <div>
              <p>14번 문제가 이해가 잘 안갑니다.</p>
              <p>어떻게하면 수학 고수가 되나요?</p>
              <p>퀄럽처럼 되고싶어요</p>
            </div>
          </Card>
          <div style={{ borderBottom: '1px solid #eee' }}></div>
          <Text fw={700} pt={20} pb={10} size="14px">
            답변일: 2024-07-18
          </Text>
          <Card w={'100%'} p={10} bg={'gray.1'}>
            <Flex p={0}></Flex>
            <div>
              <p>하하 열심히 해보세요</p>
            </div>
          </Card>
        </Flex>
      </Stack>
    </Modal>
  )
}

export default DetailModalUI
