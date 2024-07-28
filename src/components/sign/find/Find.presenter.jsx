import { Text, Button, Card, Flex, Input, Modal, SegmentedControl, Group, PasswordInput, Stack } from '@mantine/core'
import { IconAt, IconBuilding, IconId, IconLock, IconPhone } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const FindUI = ({
  opened,
  onClose,
  tabValue,
  setTabValue,
  uiType,
  handleFindId,
  handleChangePassword,
  handleChangePasswordDone,
  setUiType,
  userId,
}) => {
  const { basePath } = useRouter()

  const ModalUIRenderer = uiType => {
    switch (uiType) {
      case 'find': {
        return (
          <Flex direction={'column'} gap={20}>
            <SegmentedControl
              value={tabValue}
              defaultValue="faq"
              data={[
                { label: '아이디 찾기', value: 'id' },
                { label: '비밀번호 찾기', value: 'pw' },
              ]}
              onClick={e => {
                setTabValue(e.target.value)
              }}
              w={'100%'}
            />
            {tabValue === 'id' && (
              <>
                <Input.Wrapper style={{ flex: 1 }}>
                  <Input
                    variant="filled"
                    leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                    placeholder="아이디(이메일) 입력"
                  />
                </Input.Wrapper>
                <Button onClick={handleFindId}>아이디 찾기</Button>
              </>
            )}
            {tabValue === 'pw' && (
              <>
                <Input.Wrapper style={{ flex: 1 }}>
                  <Input
                    variant="filled"
                    leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                    placeholder="아이디(이메일) 입력"
                  />
                </Input.Wrapper>
                <Input.Wrapper style={{ flex: 1 }}>
                  <Input
                    variant="filled"
                    leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                    placeholder="가입시 입력한 이메일 입력"
                  />
                </Input.Wrapper>
                <Button onClick={handleChangePassword}>비밀번호 찾기</Button>
              </>
            )}
          </Flex>
        )
      }
      case 'id': {
        return (
          <Flex direction={'column'}>
            <Text pb={5}>가입하신 ID(Email)</Text>
            <Card bg={'gray.1'} mb={20}>
              <Text fw={700}>{userId}</Text>
            </Card>
            <Flex gap={10}>
              <Button
                w={'100%'}
                onClick={() => {
                  setUiType('find')
                  setTabValue('pw')
                }}
              >
                비밀번호 찾기
              </Button>
              <Button w={'100%'} onClick={onClose}>
                닫기
              </Button>
            </Flex>
          </Flex>
        )
      }
      case 'pw': {
        return (
          <Stack>
            <Group>
              <Input.Wrapper style={{ flex: 1 }}>
                <Input
                  variant="filled"
                  leftSection={<IconPhone style={{ width: 18, height: 18 }} stroke={1.5} />}
                  placeholder="인증번호 입력"
                />
              </Input.Wrapper>
              <Button>인증하기</Button>
            </Group>
            <PasswordInput
              variant="filled"
              leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
              placeholder="비밀번호"
            />
            <PasswordInput
              variant="filled"
              leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
              placeholder="비밀번호 재확인"
            />
            <Button onClick={handleChangePasswordDone}>비밀번호 변경하기</Button>
          </Stack>
        )
      }
    }
  }

  return (
    <Modal.Root opened={opened} onClose={onClose} size="sm" centered>
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <Modal.Body p={'xl'} bg={'white'}>
          {ModalUIRenderer(uiType)}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default FindUI
