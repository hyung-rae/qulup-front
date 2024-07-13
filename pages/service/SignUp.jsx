import React from 'react'
import { useDisclosure } from '@mantine/hooks'

import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Flex,
  Checkbox,
  Anchor,
  Stack,
  Modal,
  ScrollArea,
} from '@mantine/core'

const SignUp = ({ props }) => {
  const [signInOpened, { open: signInOpen, close: signInClose }] = useDisclosure(false)
  const [signUpOpened, { open: signUpOpen, close: signUpClose }] = useDisclosure(false)

  const [type, toggle] = useToggle(['signIn', 'signUp'])
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: val => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  })

  const handleSignIn = () => {
    signInOpen()
  }
  const handleSignUp = () => {
    signUpOpen()
  }
  return (
    <>
      {/* 로그인 모달 */}

      <Paper radius="md" p="sm" {...props}>
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <Flex align="center" justify={'space-between'}>
              <TextInput
                placeholder="아이디 (이메일) 입력"
                value={form.values.email}
                onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && '이메일이 올바르지 않습니다.'}
                radius="md"
                w={'80%'}
              />
              <Button radius="md">인증</Button>
            </Flex>

            <Flex align="center" justify={'space-between'}>
              <TextInput
                placeholder="인증번호 입력"
                value={form.values.validate}
                onChange={event => form.setFieldValue('validate', event.currentTarget.value)}
                radius="md"
                w={'80%'}
              />
              <Button radius="md">확인</Button>
            </Flex>

            <PasswordInput
              required
              label="Password"
              placeholder="비밀번호 입력"
              value={form.values.password}
              onChange={event => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            <PasswordInput
              required
              placeholder="비밀번호 확인"
              value={form.values.password}
              onChange={event => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            <TextInput
              label="소속"
              placeholder="학원 소속"
              value={form.values.validate}
              onChange={event => form.setFieldValue('validate', event.currentTarget.value)}
              radius="md"
            />
            <TextInput
              placeholder="강사명"
              value={form.values.validate}
              onChange={event => form.setFieldValue('validate', event.currentTarget.value)}
              radius="md"
            />
            <Flex align="center" justify={'space-between'}>
              <TextInput
                placeholder="닉네임"
                value={form.values.validate}
                onChange={event => form.setFieldValue('validate', event.currentTarget.value)}
                radius="md"
                w={'75%'}
              />
              <Button radius="md">중복 확인</Button>
            </Flex>

            <Flex align="center" justify={'space-between'}>
              <TextInput
                placeholder="아이디 (이메일) 입력"
                value={form.values.email}
                onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && '이메일이 올바르지 않습니다.'}
                radius="md"
                w={'80%'}
              />
              <Button radius="md">인증</Button>
            </Flex>

            <Flex align="center" justify={'space-between'}>
              <TextInput
                placeholder="인증번호 입력"
                value={form.values.validate}
                onChange={event => form.setFieldValue('validate', event.currentTarget.value)}
                radius="md"
                w={'80%'}
              />
              <Button radius="md">확인</Button>
            </Flex>
            <ScrollArea offsetScrollbars="y">asd</ScrollArea>

            <Checkbox
              label="개인정보 수집 이용 동의"
              checked={form.values.terms}
              onChange={event => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          </Stack>

          <Flex direction={'column'} justify="space-between" mt="xl">
            <Button type="submit" radius="md">
              {type === 'signUp' ? '회원가입' : '로그인'}
            </Button>
            <Group justify="space-between" pt={10}>
              <Group justify="flex-start" gap={5}>
                <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                  아이디 찾기
                </Anchor>
                <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                  비밀번호 찾기
                </Anchor>
              </Group>
              <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                회원가입
              </Anchor>
            </Group>
          </Flex>
        </form>
      </Paper>
    </>
  )
}

export default SignUp
