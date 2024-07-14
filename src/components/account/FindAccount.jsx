import React, { useState } from 'react'

import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, Paper, Button, Stack } from '@mantine/core'

import Tab from '../tab/Tab'
import { IconUser, IconLock } from '@tabler/icons-react'
const FindAccount = () => {
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

  const passwordForm = useForm({
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

  const TabContents = [
    { title: '아이디 찾기', value: 'email', icon: <IconUser />, func: () => {} },
    { title: '비밀번호 찾기', value: 'password', icon: <IconLock />, func: () => {} },
  ]

  const [tabValue, setTabValue] = useState('email')

  return (
    <>
      {/* 아이디 비밀번호 찾기 모달 */}
      <Paper radius="md" p="sm">
        {false ? (
          <>
            <form
              onSubmit={passwordForm.onSubmit(() => {
                console.log('form: ', passwordForm)
              })}
            >
              <Stack>
                <TextInput
                  required
                  placeholder="인증번호 입력"
                  value={form.values.validate}
                  onChange={event => form.setFieldValue('validate', event.currentTarget.value)}
                  // error={form.errors.email && '이메일이 올바르지 않습니다.'}
                  radius="md"
                />
                <PasswordInput
                  required
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
                <Button type="submit" radius="md">
                  비밀번호 변경
                </Button>
              </Stack>
            </form>
          </>
        ) : (
          <>
            <Tab contents={TabContents} setTabValue={setTabValue} style={{ paddingBottom: '20px' }} />
            <form onSubmit={form.onSubmit(() => {})}>
              <Stack>
                {tabValue === 'email' && (
                  <>
                    <TextInput
                      required
                      label="이메일"
                      placeholder="이메일을 입력해주세요."
                      value={form.values.email}
                      onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                      error={form.errors.email && '이메일이 올바르지 않습니다.'}
                      radius="md"
                    />
                    <Button type="submit" radius="md">
                      아이디 찾기
                    </Button>
                  </>
                )}
                {tabValue === 'password' && (
                  <>
                    <TextInput
                      required
                      label="이메일"
                      placeholder="이메일을 입력"
                      value={form.values.email}
                      onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                      error={form.errors.email && '이메일이 올바르지 않습니다.'}
                      radius="md"
                    />
                    <TextInput
                      required
                      label="가입 이메일"
                      placeholder="가입 이메일 입력"
                      value={form.values.email}
                      onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                      error={form.errors.email && '이메일이 올바르지 않습니다.'}
                      radius="md"
                    />
                    <Button type="submit" radius="md">
                      비밀번호 찾기
                    </Button>
                  </>
                )}
              </Stack>
            </form>
          </>
        )}
      </Paper>
    </>
  )
}

export default FindAccount
