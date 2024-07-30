import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Find from '../../sign/find/Find.container'
import SignIn from '../../sign/signIn/SignIn.container'
import SignUp from '../../sign/signUp/SignUp.container'
import HeaderUI from './Header.presenter'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)

  const [signInOpened, { open: signInOpen, close: signInClose }] = useDisclosure(false)
  const [signUpOpened, { open: signUpOpen, close: signUpClose }] = useDisclosure(false)
  const [findOpened, { open: findOpen, close: findClose }] = useDisclosure(false)

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

  const onClickFind = () => {
    findOpen()
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
        onClickFind={onClickFind}
      />
      {/* 회원가입 모달 */}
      <SignUp opened={signUpOpened} onClose={signUpClose} />
      {/* 아이디 / 비밀번호 찾기 모달 */}
      <Find opened={findOpened} onClose={findClose} />

      <HeaderUI isLogin={isLogin} onClickSignIn={signInOpen} handleLogOut={handleLogOut} />
    </>
  )
}

export default Header
