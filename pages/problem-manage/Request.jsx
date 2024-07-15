import React from 'react'

import { useForm } from '@mantine/form'
import { TextInput, Textarea, Paper, Group, Button, Flex, Anchor, Stack } from '@mantine/core'

const Request = ({ reQuestClose }) => {
  const form = useForm({
    initialValues: {
      email: '',
      phone: '',
      order: '',
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
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
            <TextInput
              required
              label="연락처"
              placeholder="연락처를 입력해주세요."
              value={form.values.phone}
              onChange={event => form.setFieldValue('phone', event.currentTarget.value)}
              error={form.errors.phone && '이메일이 올바르지 않습니다.'}
              radius="md"
            />
            <Textarea
              label="요청사항"
              placeholder="추가 요청사항을 입력해주세요."
              value={form.values.order}
              onChange={event => form.setFieldValue('order', event.currentTarget.value)}
              error={form.errors.order && '이메일이 올바르지 않습니다.'}
              radius="md"
            />
          </Stack>

          <Flex mt="xl" gap={10}>
            <Button type="submit" radius="md" w={'100%'}>
              보내기
            </Button>
            <Button
              type="submit"
              radius="md"
              w={'100%'}
              onClick={() => {
                if (confirm('작성한 내용이 모두 사라집니다. 취소하시겠습니까?')) {
                  reQuestClose()
                }
              }}
            >
              취소
            </Button>
          </Flex>
        </form>
      </Paper>
    </>
  )
}

export default Request
