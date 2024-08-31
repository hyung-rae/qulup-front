import { Card, Flex, Modal, Stack, Text } from '@mantine/core'
import { formatDate } from '@/src/js/script'

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
        <Card p={'16px 0'}>
          <Flex justify={'space-between'} style={{ borderTop: '1px solid #eee' }} pt={20}>
            <Text>{`작성자: ${article?.nm || '관리자'}`}</Text>
            <Text fw={700} size="14px">
              {`작성일: ${formatDate(article?.writtenDate || article?.createdDate)}`}
            </Text>
          </Flex>
        </Card>
        <Card w={'100%'} p={10} mih={300} bg={'gray.1'}>
          <div dangerouslySetInnerHTML={{ __html: article?.content }} />
        </Card>
        {article?.responseAt === 'Y' && (
          <>
            <div style={{ borderBottom: '1px solid #eee' }}></div>
            <Text fw={700} pt={20} pb={10} size="14px">
              {`답변일: ${article?.answer?.created_at}`}
            </Text>
            <Card w={'100%'} p={10}>
              <div dangerouslySetInnerHTML={{ __html: article?.answer?.body }} />
            </Card>
          </>
        )}
      </Stack>
    </Modal>
  )
}

export default DetailModalUI
