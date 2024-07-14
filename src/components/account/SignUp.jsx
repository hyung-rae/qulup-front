import React from 'react'

import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, Text, Paper, Button, Flex, Checkbox, Stack } from '@mantine/core'
import Terms from './Terms'

const SignUp = ({ props }) => {
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
            {true && <Text>상태값 표시 (인증 / 미인증 문구)</Text>}

            <PasswordInput
              required
              label="비밀번호"
              placeholder="비밀번호 입력"
              value={form.values.password}
              onChange={event => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            <PasswordInput
              required
              placeholder="비밀번호 확인"
              value={form.values.verify}
              onChange={event => form.setFieldValue('verify', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />
            {true && <Text>비밀번호 일치인지 확인 문구</Text>}

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
                w={'80%'}
              />
              <Button radius="md">중복 확인</Button>
            </Flex>
            {true && <Text>닉네임 중복체크</Text>}

            <Flex align="center" justify={'space-between'}>
              <TextInput
                placeholder="휴대폰번호"
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
            {true && <Text>휴대폰번호 인증/미인증 문구</Text>}
            <Terms />
            <Checkbox
              label="개인정보 수집 이용 동의"
              checked={form.values.terms}
              onChange={event => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          </Stack>

          <Flex direction={'column'} justify="space-between" mt="xl">
            <Button type="submit" radius="md">
              회원가입
            </Button>
          </Flex>
        </form>
      </Paper>
    </>
  )
}

export default SignUp
