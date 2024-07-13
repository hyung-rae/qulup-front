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
import SignIn from './SignIn'
import SignUp from './SignUp'

const Service = ({ props }) => {
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
      <Modal opened={signInOpened} onClose={signInClose} title={type === 'signUp' ? '회원가입' : '로그인'}>
        {/* <SignIn signInOpened={signInOpened} signInClose={signInClose} handleSignIn={handleSignIn} /> */}
        <SignUp signInOpened={signInOpened} signInClose={signInClose} handleSignIn={handleSignIn} />
      </Modal>

      {/* 회원가입 모달 */}
      {/* <Modal opened={signUpOpened} onClose={signUpClose} title="회원가입">
        <TextInput label="Email" placeholder="이메일을 입력해주세요." required />
        <PasswordInput label="Password" placeholder="비밀번호를 입력해주세요." required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            비밀번호 찾기
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          로그인
        </Button>
      </Modal> */}

      <Group>
        <Button variant="filled" onClick={handleSignIn}>
          로그인
        </Button>
        <Button variant="filled" onClick={handleSignUp}>
          회원가입
        </Button>
      </Group>
    </>
  )
}

export default Service
