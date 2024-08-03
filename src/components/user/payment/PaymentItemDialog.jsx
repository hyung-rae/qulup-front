import { postFileDownload } from '@/pages/api/problems'
import { Button, CloseButton, Group, Modal, Stack, Text } from '@mantine/core'
import { useMutation } from 'react-query'

const PaymentItemDialog = ({ opened, onClose, paymentItemList }) => {
  const postFileDownloadMutation = useMutation(postFileDownload, {
    onSuccess: res => {
      console.log('다운로드 성공', res)
    },
    onError: error => {
      // 실패 시 처리 (예: 에러 메시지 표시)
      console.error('회원12121가입 실패', error)
    },
  })

  const handleFileDownload = async () => {
    postFileDownloadMutation.mutate()
  }

  return (
    <Modal.Root opened={opened} onClose={onClose} size="md" centered>
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <CloseButton size="lg" variant="transparent" pos="absolute" top={10} right={10} onClick={onClose} />
        <Modal.Body p={'xl'} bg={'white'}>
          <Stack pt={'xl'} gap={15}>
            {paymentItemList.map(item => (
              <Group
                key={item.id}
                justify="space-between"
                align="flex-start"
                pb={10}
                style={{ borderBottom: '1px dashed gray' }}
              >
                <Stack gap={5}>
                  <Text size="sm" fw={700}>
                    {item.name}
                  </Text>
                  <Text size="sm" fw={700}>
                    {Number(item.price - item.discount || 0).toLocaleString('ko-KR')} 원
                  </Text>
                </Stack>
                <Stack>
                  <Text size="sm" fw={700}>
                    24.03.02 까지 다운로드 가능
                  </Text>
                  <Button size="compact-sm" color="dark" onClick={handleFileDownload}>
                    다운로드
                  </Button>
                </Stack>
              </Group>
            ))}
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default PaymentItemDialog
