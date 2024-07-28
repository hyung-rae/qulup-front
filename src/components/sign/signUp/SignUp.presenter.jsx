import { Button, Checkbox, Flex, Group, Image, Input, Modal, PasswordInput } from '@mantine/core'
import { IconAt, IconBuilding, IconId, IconLock, IconPhone } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const SignUpUI = ({ opened, onClose, onClickTerms }) => {
  const { basePath } = useRouter()
  return (
    <Modal.Root opened={opened} onClose={onClose} size="sm" centered>
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <Modal.Body p={'xl'} bg={'white'}>
          <Image radius="md" w={120} src={`${basePath}/images/logo.png`} alt={'logo'} m="auto" my={30} />

          <Flex direction={'column'} gap={20} mb={40}>
            <Input.Wrapper>
              <Input size="xs" variant="filled" placeholder="이름" />
            </Input.Wrapper>
            <Group>
              <Input.Wrapper style={{ flex: 1 }}>
                <Input
                  size="xs"
                  variant="filled"
                  leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                  placeholder="이메일"
                />
              </Input.Wrapper>
              <Button size="xs">인증하기</Button>
            </Group>
            <PasswordInput
              size="xs"
              variant="filled"
              leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
              placeholder="비밀번호"
            />
            <PasswordInput
              size="xs"
              variant="filled"
              leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
              placeholder="비밀번호 재확인"
            />
            <Group>
              <Input.Wrapper style={{ flex: 1 }}>
                <Input
                  size="xs"
                  variant="filled"
                  leftSection={<IconPhone style={{ width: 18, height: 18 }} stroke={1.5} />}
                  placeholder="휴대폰 번호"
                />
              </Input.Wrapper>
              <Button size="xs">인증하기</Button>
            </Group>
          </Flex>

          <Flex direction={'column'} gap={20}>
            <Input.Wrapper>
              <Input
                size="xs"
                variant="filled"
                placeholder="학원 소속"
                leftSection={<IconBuilding style={{ width: 18, height: 18 }} stroke={1.5} />}
              />
            </Input.Wrapper>
            <Input.Wrapper>
              <Input
                size="xs"
                variant="filled"
                placeholder="강사명"
                leftSection={<IconId style={{ width: 18, height: 18 }} stroke={1.5} />}
              />
            </Input.Wrapper>
            <Group>
              <Input.Wrapper style={{ flex: 1 }}>
                <Input size="xs" variant="filled" placeholder="닉네임" />
              </Input.Wrapper>
              <Button size="xs">중복확인</Button>
            </Group>
          </Flex>
          <Group mt={20} justify="space-between">
            <Checkbox size="xs" defaultChecked label="개인정보 수집 이용 동의" color="dark" />
            <Button size="xs" variant="transparent" onClick={onClickTerms}>
              약관보기
            </Button>
          </Group>

          <Button fullWidth color="dark" mt={30} onClick={onClose}>
            회원가입
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default SignUpUI
