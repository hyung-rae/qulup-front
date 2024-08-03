import { Button, Checkbox, Flex, Group, Image, Input, Modal, PasswordInput, TextInput } from '@mantine/core'
import { IconAt, IconBuilding, IconId, IconLock, IconPhone } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SignUpUI = ({
  opened,
  onClose,
  onClickTerms,
  form,
  handleSubmit,
  handleEmailVerification,
  handlePhoneVerification,
}) => {
  const { basePath } = useRouter()

  return (
    <Modal.Root opened={opened} onClose={onClose} size="sm" centered>
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <Modal.Body p={'xl'} bg={'white'}>
          <Image radius="md" w={120} src={`${basePath}/images/logo.png`} alt={'logo'} m="auto" my={30} />

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Flex direction={'column'} gap={20} mb={40}>
              {/* <Group> */}
              <TextInput flex={1} variant="filled" placeholder="닉네임" {...form.getInputProps('nickname')} />
              {/* <Button>중복확인</Button> */}
              {/* </Group> */}
              <Group>
                <TextInput
                  flex={1}
                  variant="filled"
                  leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                  placeholder="이메일"
                  {...form.getInputProps('email')}
                />
                <Button onClick={handleEmailVerification}>인증하기</Button>
              </Group>
              <TextInput
                flex={1}
                variant="filled"
                leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
                placeholder="이메일 인증 코드"
                {...form.getInputProps('emailVerificationCode')}
              />
              <PasswordInput
                variant="filled"
                leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
                placeholder="비밀번호"
                {...form.getInputProps('password')}
              />
              <PasswordInput
                variant="filled"
                leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
                placeholder="비밀번호 재확인"
                {...form.getInputProps('confirmPassword')}
              />
              <Group>
                <TextInput
                  flex={1}
                  variant="filled"
                  leftSection={<IconPhone style={{ width: 18, height: 18 }} stroke={1.5} />}
                  placeholder="휴대폰 번호"
                  {...form.getInputProps('phone')}
                />
                <Button onClick={handlePhoneVerification}>인증하기</Button>
              </Group>
            </Flex>

            <Flex direction={'column'} gap={20}>
              <TextInput
                variant="filled"
                placeholder="학원 소속"
                leftSection={<IconBuilding style={{ width: 18, height: 18 }} stroke={1.5} />}
                {...form.getInputProps('academyNm')}
              />
              <TextInput
                variant="filled"
                placeholder="강사명"
                leftSection={<IconId style={{ width: 18, height: 18 }} stroke={1.5} />}
                {...form.getInputProps('nm')}
              />
            </Flex>
            <Group mt={20} justify="space-between">
              <Checkbox
                label="개인정보 수집 이용 동의"
                color="dark"
                {...form.getInputProps('termsAccepted', { type: 'checkbox' })}
              />
              <Button variant="transparent" onClick={onClickTerms}>
                약관보기
              </Button>
            </Group>

            <Button fullWidth color="dark" mt={30} type="submit">
              회원가입
            </Button>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default SignUpUI
