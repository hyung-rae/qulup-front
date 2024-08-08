import { useEffect, useState } from 'react'

// component
import SignUpUI from './SignUp.presenter'
import Terms from './Terms'

// api
import { postSignUp, postVerificationEmail, postVerificationPhone, getTest, getFromSession } from '@/pages/api/authApi'

// lib
import { useDisclosure } from '@mantine/hooks'
import { useMutation } from 'react-query'
import { useForm } from '@mantine/form'

const SignUp = ({ opened, onClose }) => {
  const [termsOpened, { open, close }] = useDisclosure(false)

  // 회원가입 initial 폼
  const form = useForm({
    initialValues: {
      email: 'aceman9508@gmail.com', // 이메일
      password: 'znjffjq123$', // 패스워드
      academyNm: '퀄럽', // 학원 소속
      nm: '김정빈', // 강사명
      nickname: '수학고수', // 닉네임
      phone: '01063196096', // 핸드폰 번호
      confirmPassword: 'znjffjq123$',
      emailVerificationCode: '',
      termsAccepted: false,
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : '이메일이 올바르지 않습니다.'),
      password: value => (value.length < 6 ? '패스워드는 최소 6자여야 합니다.' : null),
      confirmPassword: (value, values) => (value !== values.password ? '비밀번호가 같지 않습니다.' : null),
      phone: value => (/^\d{10,11}$/.test(value) ? null : '올바른 핸드폰번호가 아닙니다.'),
    },
  })

  // 회원가입 api 요청 함수
  const signUpMutation = useMutation(postSignUp, {
    onSuccess: res => {
      if (res.success) {
        console.log('회원가입 성공')
        form.reset()
        onClose()
      } else {
        console.log('회원가입 실패')
      }
    },
    onSettled: () => {},
  })

  const getTestMutation = useMutation(getTest, {
    onSuccess: res => {
      if (res.success) {
        console.log('res test: ', res)
      } else {
        console.log('회원가입 실패')
      }
    },
    onSettled: () => {},
  })

  const getFromSessionMutation = useMutation(getFromSession, {
    onSuccess: res => {
      if (res.success) {
        console.log('res test: ', res)
      } else {
        console.log('회원가입 실패')
      }
    },
    onSettled: () => {},
  })

  // 회원가입 폼제출 함수
  const handleSubmit = values => {
    const param = {
      email: values.email,
      password: values.password,
      academyNm: values.academyNm,
      nm: values.nm,
      nickname: values.nickname,
      phone: values.phone,
      emailVerificationCode: values.emailVerificationCode,
    }
    signUpMutation.mutate(param)
  }

  // 이메일 인증 api 요청 함수
  const emailVerificationMutation = useMutation(postVerificationEmail, {
    onSuccess: res => {
      if (res.success) {
        alert('이메일 인증 성공')
      } else {
        console.log('이메일 인증 실패')
      }
    },
  })

  // 이메일 인증 함수
  const handleEmailVerification = () => {
    const param = {
      email: form.values.email,
    }
    emailVerificationMutation.mutate(param)
  }

  // 핸드폰 인증 api 요청 함수
  const phoneVerificationMutation = useMutation(postVerificationPhone, {
    onSuccess: res => {
      if (res.success) {
        alert('휴대폰 인증 성공')
      } else {
        console.log('휴대폰 인증 실패')
      }
    },
  })

  // 핸드폰 인증 함수
  const handlePhoneVerification = () => {
    const param = {
      phone: form.values.phone,
    }
    phoneVerificationMutation.mutate(param)
  }

  const handleSubmitTest = () => {
    getTestMutation.mutate({ test: 'test' })
  }
  const handleTest = () => {
    getFromSessionMutation.mutate()
  }

  return (
    <>
      <SignUpUI
        form={form}
        handleSubmit={handleSubmit}
        handleTest={handleTest}
        handleSubmitTest={handleSubmitTest}
        handleEmailVerification={handleEmailVerification}
        handlePhoneVerification={handlePhoneVerification}
        opened={opened}
        onClose={() => {
          onClose()
          form.reset()
        }}
        onClickTerms={open}
      />

      <Terms opened={termsOpened} onClose={close} />
    </>
  )
}

export default SignUp
