import { useMutation } from 'react-query'
import SignUpUI from './SignUp.presenter'
import { useDisclosure } from '@mantine/hooks'
import Terms from './Terms'
import { useForm } from '@mantine/form'
import { postSignUp, postVerificationEmail, postVerificationPhone } from '@/pages/api/signIn'

const SignUp = ({ opened, onClose }) => {
  const [termsOpened, { open, close }] = useDisclosure(false)

  const form = useForm({
    initialValues: {
      email: 'qulup@example.com', // 이메일
      password: 'znjffjq123$', // 패스워드
      academyNm: '퀄럽', // 학원 소속
      nm: '김정빈', // 강사명
      nickname: '수학고수', // 닉네임
      phone: '01012345678', // 핸드폰 번호
      confirmPassword: 'znjffjq123$',
      termsAccepted: false,
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: value => (value.length < 6 ? 'Password must be at least 6 characters' : null),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords do not match' : null),
      phone: value => (/^\d{10,11}$/.test(value) ? null : 'Invalid phone number'),
    },
  })

  const signUpMutation = useMutation(postSignUp, {
    onSuccess: () => {
      // 성공 시 처리 (예: 성공 메시지 표시, 리디렉션 등)
      console.log('회원가입 성공')
      onClose()
    },
    onError: error => {
      // 실패 시 처리 (예: 에러 메시지 표시)
      console.error('회원12121가입 실패', error)
    },
  })
  const emailVerificationMutation = useMutation(postVerificationEmail, {
    onSuccess: () => {
      // 성공 시 처리 (예: 성공 메시지 표시, 리디렉션 등)
      console.log('이메일 인증 성공')
      onClose()
    },
    onError: error => {
      // 실패 시 처리 (예: 에러 메시지 표시)
      console.error('이메일 인증 실패::::', error)
    },
  })
  const phoneVerificationMutation = useMutation(postVerificationPhone, {
    onSuccess: () => {
      // 성공 시 처리 (예: 성공 메시지 표시, 리디렉션 등)
      console.log('휴대폰번호 성공')
      onClose()
    },
    onError: error => {
      // 실패 시 처리 (예: 에러 메시지 표시)
      console.error('휴대폰 번호 인증 실패::::', error)
    },
  })

  const handleSubmit = values => {
    const param = {
      email: values.email,
      password: values.password,
      academyNm: values.academyNm,
      nm: values.nm,
      nickname: values.nickname,
      phone: values.phone,
    }
    signUpMutation.mutate(param)
  }

  const handleEmailVerification = () => {
    console.log('form.values:', form.values.email)
    const param = {
      email: 'jb2n95@naver.com',
    }
    emailVerificationMutation.mutate(param)
  }

  const handlePhoneVerification = () => {
    console.log('form.values:', form.values.phone)
    const param = {
      phone: '01063196097',
    }
    phoneVerificationMutation.mutate(param)
  }

  return (
    <>
      <SignUpUI
        form={form}
        handleSubmit={handleSubmit}
        handleEmailVerification={handleEmailVerification}
        handlePhoneVerification={handlePhoneVerification}
        opened={opened}
        onClose={onClose}
        onClickTerms={open}
      />
      <Terms opened={termsOpened} onClose={close} />
    </>
  )
}

export default SignUp
