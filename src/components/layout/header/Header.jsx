import * as Mantine from '@mantine/core'
import { IconShoppingCart, IconUserCog, IconNews } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import classes from './Header.module.css'

const Header = () => {
  const { push } = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Mantine.Container fluid h={'100%'} bg={'dark'}>
      <Mantine.Group justify="space-around" h={'100%'}>
        <Mantine.Image
          radius="md"
          w={'auto'}
          h={20}
          src="/logo.png"
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
                <Mantine.Button color="dark" size="compact-xs">
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
            <Mantine.Button
              size="compact-md"
              variant="transparent"
              className={classes.label}
              onClick={() => setIsLogin(true)}
            >
              로그인
            </Mantine.Button>
            <Mantine.Button size="compact-md" variant="default">
              회원가입
            </Mantine.Button>
          </Mantine.Group>
        )}
      </Mantine.Group>
    </Mantine.Container>
  )
}

export default Header
