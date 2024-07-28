import { Button, Divider, Flex, Group, Image, Input, Modal, PasswordInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { FacebookButton, GoogleButton, KaKaoButton, NaverButton } from '@/src/components/social-buttons/index'

const SignInUI = ({ opened, onClose, handleLogin, onClickSignUp, onClickFind }) => {
  const { basePath } = useRouter()
  return (
    <Modal.Root opened={opened} onClose={onClose} size="sm">
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
                  defaultValue={'Ls2pC@example.com'}
                />
              </Input.Wrapper>
              <PasswordInput
                variant="filled"
                leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
                placeholder="비밀번호를 입력해주세요"
                mt={20}
                defaultValue={'12345678'}
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
            <Divider label="or" labelPosition="center" color="gray" />
            <Flex direction={'column'} gap={10}>
              <GoogleButton>구글 로그인</GoogleButton>
              <FacebookButton>Facebook 로그인</FacebookButton>
              <NaverButton>네이버 로그인</NaverButton>
              <KaKaoButton>카카오 로그인</KaKaoButton>
            </Flex>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default SignInUI
