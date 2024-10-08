import { Button, Flex, Group, Image, Input, Modal, PasswordInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const SignInUI = ({ opened, onClose, handleLogin, onClickSignUp, onClickFind, setEmail, setPassword }) => {
  const { basePath } = useRouter()
  return (
    <Modal.Root opened={opened} onClose={onClose} size="sm" centered>
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <Modal.Body p={'xl'} bg={'white'}>
          <Image radius="md" w={120} src={`${basePath}/images/logo.png`} alt={'logo'} m="auto" mt={30} />
          <Flex direction={'column'} mt={50} gap={30}>
            <div>
              <Input.Wrapper>
                <Input
                  variant="filled"
                  leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                  placeholder="이메일을 입력해주세요"
                  defaultValue={'aceman9508@gmail.com'}
                  onChange={e => setEmail(e.target.value)}
                />
              </Input.Wrapper>
              <PasswordInput
                variant="filled"
                leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
                placeholder="비밀번호를 입력해주세요"
                mt={20}
                defaultValue={'znjfdjq123$'}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div>
              <Button fullWidth color="dark" onClick={handleLogin}>
                로그인
              </Button>

              <Group mt={10} justify="space-between">
                <Button size="compact-xs" c="dimmed" td="underline" variant="transparent" onClick={onClickSignUp}>
                  회원가입 하기
                </Button>
                <Button size="compact-xs" c="dimmed" td="underline" variant="transparent" onClick={onClickFind}>
                  이메일 / 비밀번호 찾기
                </Button>
              </Group>
            </div>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default SignInUI
