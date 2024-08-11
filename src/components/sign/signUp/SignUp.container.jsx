// component
import SignUpUI from './SignUp.presenter'
import Terms from './Terms'

// api
import useAuthApi from '@/src/api/auth/useAuthApi'

// lib
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'

const SignUp = ({ opened, onClose }) => {
  const [termsOpened, { open, close }] = useDisclosure(false)
  const { signUp, verificationEmail, verificationPhone } = useAuthApi()

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

  // 회원가입 폼제출 함수
  const handleSubmit = async values => {
    const param = {
      email: values.email,
      password: values.password,
      academyNm: values.academyNm,
      nm: values.nm,
      nickname: values.nickname,
      phone: values.phone,
      emailVerificationCode: values.emailVerificationCode,
    }
    await signUp(param)
  }

  // 이메일 인증 함수
  const handleEmailVerification = () => {
    const param = {
      email: form.values.email,
    }
    verificationEmail(param)
  }

  // 핸드폰 인증 함수
  const handlePhoneVerification = () => {
    const param = {
      phone: form.values.phone,
    }
    verificationPhone(param)
  }

  return (
    <>
      <SignUpUI
        form={form}
        handleSubmit={handleSubmit}
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
