import * as Mantine from '@mantine/core'
import { IconShoppingCart, IconUserCog, IconNews } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import classes from './Header.module.css'

import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import SignIn from '../../sign/SignIn'
import SignUp from '../../sign/SignUp'

const Header = () => {
  const { push, basePath } = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  const [signInOpened, { open: signInOpen, close: signInClose }] = useDisclosure(false)
  const [signUpOpened, { open: signUpOpen, close: signUpClose }] = useDisclosure(false)

  const handleLogin = () => {
    setIsLogin(true)
    signInClose()
  }
  return (
    <>
      {/* 로그인  모달 */}
      <SignIn opened={signInOpened} onClose={signInClose} open={signUpOpen} handleLogin={handleLogin} />
      {/* 회원가입 모달 */}
      <SignUp opened={signUpOpened} onClose={signUpClose} />
      <Mantine.Group bg={'dark.7'} justify="space-around" h={'100%'} w={'100%'}>
        <Mantine.Image
          radius="md"
          w={'auto'}
          h={20}
          src={`${basePath}/images/logo.png`}
          style={{ cursor: 'pointer' }}
          onClick={() => push('/')}
          alt={'logo'}
        />

        {/* 로그인/유저 정보 */}
        {isLogin ? (
          <Mantine.Flex direction="column" gap={15} pt="sm">
            <Mantine.Group gap={30}>
              <Mantine.Group gap={10}>
                <Mantine.Text fz="sm" fw="bolder" c="white">
                  우형래 님
                </Mantine.Text>
                <Mantine.Text fz="sm" fw="bolder" c="white">
                  280 P
                </Mantine.Text>
              </Mantine.Group>

              <Mantine.Group gap={5}>
                <Mantine.Button
                  color="dark"
                  size="compact-xs"
                  onClick={() => {
                    push('service')
                  }}
                >
                  고객센터
                </Mantine.Button>
                <Mantine.Button variant="default" size="compact-xs" onClick={() => setIsLogin(false)}>
                  로그아웃
                </Mantine.Button>
              </Mantine.Group>
            </Mantine.Group>

            <Mantine.Group justify="flex-end" gap={10}>
              <Mantine.Tooltip
                label={<Mantine.Text fz={10}>Math Gemstone</Mantine.Text>}
                position="bottom"
                offset={0}
                color="dark.9"
              >
                <Mantine.Indicator disabled>
                  <Mantine.ActionIcon
                    variant="transparent"
                    color="dark.9"
                    c="white"
                    size="md"
                    radius="md"
                    onClick={() => push('/gemstone')}
                  >
                    <IconNews style={{ width: '80%', height: '80%' }} stroke={2} />
                  </Mantine.ActionIcon>
                </Mantine.Indicator>
              </Mantine.Tooltip>

              <Mantine.Tooltip
                label={<Mantine.Text fz={10}>마이페이지</Mantine.Text>}
                position="bottom"
                offset={0}
                color="dark.9"
                onClick={() => push('/user-info')}
              >
                <Mantine.Indicator disabled>
                  <Mantine.ActionIcon variant="transparent" color="dark.9" c="white" size="md" radius="md">
                    <IconUserCog style={{ width: '80%', height: '80%' }} stroke={2} />
                  </Mantine.ActionIcon>
                </Mantine.Indicator>
              </Mantine.Tooltip>

              <Mantine.Tooltip
                label={<Mantine.Text fz={10}>장바구니</Mantine.Text>}
                position="bottom"
                offset={0}
                color="dark.9"
              >
                <Mantine.Indicator color="red" size={5} offset={4}>
                  <Mantine.ActionIcon
                    variant="transparent"
                    color="dark.9"
                    c="white"
                    size="md"
                    radius="md"
                    onClick={() => push('/cart')}
                  >
                    <IconShoppingCart style={{ width: '80%', height: '80%' }} stroke={2} />
                  </Mantine.ActionIcon>
                </Mantine.Indicator>
              </Mantine.Tooltip>
            </Mantine.Group>
          </Mantine.Flex>
        ) : (
          <Mantine.Group gap={15}>
            <Mantine.Button size="compact-md" variant="transparent" className={classes.label} onClick={signInOpen}>
              로그인
            </Mantine.Button>
            {/* <Mantine.Button size="compact-md" variant="default" onClick={open}>
              회원가입
            </Mantine.Button> */}
          </Mantine.Group>
        )}
      </Mantine.Group>
    </>
  )
}

export default Header
