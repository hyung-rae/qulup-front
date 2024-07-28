import { Card, Flex, Modal, Stack, Text } from '@mantine/core'
import { useMemo } from 'react'

const DetailModalUI = ({ ...props }) => {
  const { detailOpened, detailClose, article } = props

  return (
    <Modal
      opened={detailOpened}
      onClose={detailClose}
      closeOnClickOutside={false}
      title={article?.title || '1:1 문의'}
      centered
      size={'xl'}
    >
      <Stack gap={0}>
        <Card style={{ borderBottom: '1px solid #eee' }} p={'16px 0'}>
          <Flex justify={'space-between'} p={0}>
            <Text>{`작성자: ${article?.writer}`}</Text>
            <Text fw={700} size="14px">
              {`작성일: ${article?.created_at}`}
            </Text>
          </Flex>
        </Card>
        <Flex direction={'column'}>
          <Card w={'100%'} p={10}>
            <div>{article?.body}</div>
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
