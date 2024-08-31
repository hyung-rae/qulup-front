import { Box, Button, FileInput, Group, Modal, Stack } from '@mantine/core'
import TextEditor from '@/src/components/textEditor'

const WriteModalUI = ({ ...props }) => {
  const { setEditorHtml, handlePostData, writingOpened, writingClose } = props
  return (
    <Modal
      opened={writingOpened}
      onClose={writingClose}
      closeOnClickOutside={false}
      title={'문의하기'}
      centered
      size={'xl'}
    >
      <Stack>
        <Group>
          <FileInput w={'100%'} label="파일 업로드" placeholder="클릭하여 파일을 업로드" multiple />
        </Group>
        <Box>
          <TextEditor setEditorHtml={setEditorHtml} />
        </Box>
        <Group w={'100%'} justify="center">
          <Button w={'240px'} onClick={handlePostData}>
            글쓰기
          </Button>
          <Button
            w={'240px'}
            onClick={() => {
              if (confirm('작성했던 데이터가 모두 사라집니다. 취소하시겠습니까?')) {
                setEditorHtml('')
                writingClose()
              }
            }}
          >
            취소하기
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default WriteModalUI
