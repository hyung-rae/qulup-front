import React from 'react'
import { useDisclosure } from '@mantine/hooks'

import { Group, Button, Modal } from '@mantine/core'
import SignIn from '../../src/components/account/SignIn'
import SignUp from '../../src/components/account/SignUp'
import FindAccount from '../../src/components/account/FindAccount'

const Service = ({ props }) => {
  const [signInOpened, { open: signInOpen, close: signInClose }] = useDisclosure(false)
  const [signUpOpened, { open: signUpOpen, close: signUpClose }] = useDisclosure(false)
  const [findAccountOpened, { open: findAccountOpen, close: findAccountClose }] = useDisclosure(false)

  const handleSignIn = () => {
    signInOpen()
  }
  const handleSignUp = () => {
    signUpOpen()
  }

  const handleFindAccount = () => {
    findAccountOpen()
  }
  return (
    <>
      {/* 로그인 모달 */}
      <Modal opened={signInOpened} onClose={signInClose} title={'로그인'}>
        <SignIn signInOpened={signInOpened} signInClose={signInClose} handleSignIn={handleSignIn} />
      </Modal>
      {/* 회원가입 모달 */}
      <Modal opened={signUpOpened} size={'lg'} onClose={signUpClose} title={'QULUP 회원가입'}>
        <SignUp signUpOpened={signUpOpened} signUpClose={signUpClose} handleSignUp={handleSignUp} />
      </Modal>

      {/* 찾기 모달 */}
      <Modal opened={findAccountOpened} onClose={findAccountClose} title={'아이디 / 비밀번호 찾기'}>
        <FindAccount signInOpened={signInOpened} signInClose={signInClose} handleSignIn={handleSignIn} />
      </Modal>

      <Group>
        <Button variant="filled" onClick={handleSignIn}>
          로그인
        </Button>
        <Button variant="filled" onClick={handleSignUp}>
          회원가입
        </Button>
        <Button variant="filled" onClick={handleFindAccount}>
          아이디/비밀번호 찾기
        </Button>
      </Group>
    </>
  )
}

export default Service
