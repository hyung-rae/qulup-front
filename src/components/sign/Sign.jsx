import {
  Button,
  CloseButton,
  Divider,
  Flex,
  Group,
  Image,
  Input,
  Modal,
  PasswordInput,
  Text,
  Title,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { IconAt, IconLock } from '@tabler/icons-react'
import { FacebookButton, GoogleButton, KaKaoButton, NaverButton } from '../social-buttons'

const Sign = ({ opened, onClose }) => {
  const { basePath } = useRouter()
  return (
    <Modal.Root opened={opened} onClose={onClose} size="sm">
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <CloseButton size="xl" variant="transparent" c="dark" pos="absolute" top={10} right={10} onClick={onClose} />
        <Modal.Body p={'xl'} bg={'gray.3'}>
          <Image radius="md" w={120} src={`${basePath}/images/logo.png`} alt={'logo'} m="auto" mt={30} />
          <Flex direction={'column'} mt={50} gap={30}>
            <div>
              <Input.Wrapper>
                <Input
                  variant="filled"
                  leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                  placeholder="이메일을 입력해주세요"
                />
              </Input.Wrapper>
              <PasswordInput
                variant="filled"
                leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
                placeholder="비밀번호를 입력해주세요"
                mt={20}
              />
            </div>

            <div>
              <Button fullWidth color="dark">
                로그인
              </Button>

              <Group mt={10} justify="space-between">
                <Text size="sm" c="dimmed" td="underline" style={{ cursor: 'pointer' }}>
                  회원가입 하기
                </Text>
                <Text size="sm" c="dimmed" td="underline" style={{ cursor: 'pointer' }}>
                  이메일 / 비밀번호 찾기
                </Text>
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

export default Sign
