import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import Find from '../../sign/find/Find.container'
import SignIn from '../../sign/signIn/SignIn.container'
import SignUp from '../../sign/signUp/SignUp.container'
import HeaderUI from './Header.presenter'
import { postSignIn } from '@/pages/api/authApi'
import { useMutation } from 'react-query'
import { userState } from '@/src/services/user'
import { useRecoilState } from 'recoil'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useRecoilState(userState)

  const [signInOpened, { open: signInOpen, close: signInClose }] = useDisclosure(false)
  const [signUpOpened, { open: signUpOpen, close: signUpClose }] = useDisclosure(false)
  const [findOpened, { open: findOpen, close: findClose }] = useDisclosure(false)

  const mutation = useMutation(postSignIn, {
    onSuccess: data => {
      setUser(data)
      setIsLogin(true)
    },
    onError: error => {
      console.error('로그인 실패:', error)
      alert('로그인 실패')
    },
  })

  const handleLogin = async () => {
    mutation.mutate({ email: username, password })
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

  const moveToSection = section => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

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
        setUsername={setUsername}
        setPassword={setPassword}
      />
      {/* 회원가입 모달 */}
      <SignUp opened={signUpOpened} onClose={signUpClose} />
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
