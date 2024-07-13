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
} from '@mantine/core'

const SignIn = props => {
  const { signInOpened, handleSignIn, signInClose } = props

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

  return (
    <>
      {/* 로그인 모달 */}
      <Paper radius="md" p="sm">
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              required
              label="이메일"
              placeholder="이메일을 입력해주세요."
              value={form.values.email}
              onChange={event => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && '이메일이 올바르지 않습니다.'}
              radius="md"
            />

            <PasswordInput
              required
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              value={form.values.password}
              onChange={event => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && '비밀번호는 6자 이상이여야 합니다.'}
              radius="md"
            />
          </Stack>

          <Flex direction={'column'} justify="space-between" mt="xl">
            <Button type="submit" radius="md">
              회원가입
            </Button>
            <Group justify="space-between" pt={10}>
              <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                로그인
              </Anchor>
            </Group>
          </Flex>
        </form>
      </Paper>
    </>
  )
}

export default SignIn
