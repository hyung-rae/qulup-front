import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SignIn from '../../sign/signIn/SignIn.container'
import HeaderUI from './Header.presenter'
import SignUp from '../../sign/signUp/SignUp.container'

const Header = () => {
  const { push, basePath } = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  const [signInOpened, { open: signInOpen, close: signInClose }] = useDisclosure(false)
  const [signUpOpened, { open: signUpOpen, close: signUpClose }] = useDisclosure(false)

  const handleLogin = () => {
    setIsLogin(true)
    signInClose()
  }

  const handleLogOut = () => {
    setIsLogin(false)
  }

  const onClickSignUp = () => {
    signUpOpen()
    signInClose()
  }

  return (
    <>
      {/* 로그인  모달 */}
      <SignIn
        opened={signInOpened}
        onClose={signInClose}
        open={signInOpen}
        handleLogin={handleLogin}
        onClickSignUp={onClickSignUp}
      />
      {/* 회원가입 모달 */}
      <SignUp opened={signUpOpened} onClose={signUpClose} />
      <HeaderUI isLogin={isLogin} onClickSignIn={signInOpen} handleLogOut={handleLogOut} />
    </>
  )
}

export default Header
