import { userState } from '@/src/services/user'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Find from '../../sign/find/Find.container'
import SignIn from '../../sign/signIn/SignIn.container'
import SignUp from '../../sign/signUp/SignUp.container'
import HeaderUI from './Header.presenter'

import useAuthApi from '@/src/api/auth/useAuthApi'
import { useRouter } from 'next/router'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('aceman9508@gmail.com')
  const [password, setPassword] = useState('znjffjq123$')
  const [user, setUser] = useRecoilState(userState)
  const { signIn, logout, refresh } = useAuthApi()
  const [loginToken, setLoginToken] = useState('')
  const [signUpToken, setSignUpToken] = useState('')

  const [signInOpened, { open: signInOpen, close: signInClose }] = useDisclosure(false)
  const [signUpOpened, { open: signUpOpen, close: signUpClose }] = useDisclosure(false)
  const [findOpened, { open: findOpen, close: findClose }] = useDisclosure(false)

  const router = useRouter()

  const handleLogin = async () => {
    let { memberData } = await signIn({ email, password, recaptchaToken: loginToken })
    if (!memberData) return
    setUser(memberData)
    setIsLogin(true)
    signInClose()
  }

  const handleLogOut = async () => {
    await logout()
    setIsLogin(false)
    router.push('/')
  }

  const handleRefreshSession = async () => {
    try {
      let { success, memberData } = await refresh()
      if (!success) return
      setUser(memberData)
      setIsLogin(true)
    } catch {
      return
    }
  }

  const onClickSignUp = () => {
    signUpOpen()
    signInClose()
  }

  const onClickFind = () => {
    findOpen()
    signInClose()
  }

  const moveToSection = section => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  useEffect(() => {
    handleRefreshSession()
  }, [])

  return (
    <>
      {/* 로그인 모달 */}
      <SignIn
        opened={signInOpened}
        onClose={signInClose}
        open={signInOpen}
        handleLogin={handleLogin}
        onClickSignUp={onClickSignUp}
        onClickFind={onClickFind}
        setEmail={setEmail}
        setPassword={setPassword}
        setToken={setLoginToken}
      />
      {/* 회원가입 모달 */}
      <SignUp opened={signUpOpened} onClose={signUpClose} signUpToken={signUpToken} setToken={setSignUpToken} />
      {/* 아이디 / 비밀번호 찾기 모달 */}
      <Find opened={findOpened} onClose={findClose} />

      <HeaderUI
        user={user}
        isLogin={isLogin}
        onClickSignIn={signInOpen}
        handleLogOut={handleLogOut}
        moveToSection={moveToSection}
      />
    </>
  )
}

export default Header
