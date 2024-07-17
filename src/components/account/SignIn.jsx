import React from 'react'

import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, Paper, Group, Button, Flex, Anchor, Stack } from '@mantine/core'

const SignIn = ({ setIsLogin, signInClose, signUpOpen, findAccountOpen }) => {
  const form = useForm({
    initialValues: {
      email: 'qul@up.com',
      name: '',
      password: '12341234',
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
            <Button
              type="submit"
              radius="md"
              onClick={() => {
                signInClose()
                setIsLogin(true)
              }}
            >
              로그인
            </Button>
            <Group justify="space-between" pt={10}>
              <Group justify="flex-start" gap={5}>
                <Anchor component="button" type="button" c="dimmed" onClick={() => findAccountOpen()} size="xs">
                  아이디 찾기
                </Anchor>
                <Anchor component="button" type="button" c="dimmed" onClick={() => findAccountOpen()} size="xs">
                  비밀번호 찾기
                </Anchor>
              </Group>
              <Anchor component="button" type="button" c="dimmed" onClick={() => signUpOpen()} size="xs">
                회원가입
              </Anchor>
            </Group>
          </Flex>
        </form>
      </Paper>
    </>
  )
}

export default SignIn
