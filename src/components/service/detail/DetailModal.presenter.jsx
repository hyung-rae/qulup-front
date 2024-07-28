import { Card, Flex, Modal, Stack, Text } from '@mantine/core'

const DetailModalUI = ({ ...props }) => {
  const { detailOpened, detailClose, article } = props
  console.log('article: ', article)

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
          <Flex justify={'space-between'} style={{ borderTop: '1px solid #eee' }} pt={20}>
            <Text>{`작성자: ${article?.writer}`}</Text>
            <Text fw={700} size="14px">
              {`작성일: ${article?.created_at}`}
            </Text>
          </Flex>
        </Card>
        <Card w={'100%'} p={10} mih={300} bg={'gray.1'}>
          <div>{article?.body}</div>
        </Card>
        {article?.answer && (
          <>
            <div style={{ borderBottom: '1px solid #eee' }}></div>
            <Text fw={700} pt={20} pb={10} size="14px">
              {`답변일: ${article?.answer?.created_at}`}
            </Text>
            <Card w={'100%'} p={10}>
              <div>{article?.answer?.body}</div>
            </Card>
          </>
        )}
      </Stack>
    </Modal>
  )
}

export default DetailModalUI
