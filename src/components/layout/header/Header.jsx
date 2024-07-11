import * as Mantine from '@mantine/core'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IconShoppingBag, IconLogout, IconArrowRight, IconUser } from '@tabler/icons-react'

const Header = () => {
  const { push } = useRouter()
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Mantine.Group h="100%" px="xl" justify="space-around" gap={5}>
      <Mantine.Group>
        <Mantine.Image
          radius="md"
          h={20}
          src="/logo.png"
          style={{ cursor: 'pointer' }}
          onClick={() => push('/')}
          alt={'logo'}
        />
      </Mantine.Group>

      <Mantine.Group>
        {isLogin ? (
          <Mantine.Group gap={5}>
            <Mantine.Button
              rightSection={<IconArrowRight style={{ width: '70%', height: '70%' }} stroke={2} />}
              size="sm"
              variant="gradient"
              gradient={{ from: 'black', to: 'dark', deg: 10 }}
              c={'white'}
              mr={'xl'}
            >
              Math Gemstone
            </Mantine.Button>

            <Mantine.ActionIcon variant="subtle" size="lg" radius={'xl'} c={'white'}>
              <IconUser style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </Mantine.ActionIcon>

            <Mantine.ActionIcon variant="subtle" size="lg" radius={'xl'} c={'white'}>
              <IconShoppingBag style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </Mantine.ActionIcon>

            <Mantine.ActionIcon variant="subtle" size="lg" radius={'xl'} c={'white'} onClick={() => setIsLogin(false)}>
              <IconLogout style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </Mantine.ActionIcon>
          </Mantine.Group>
        ) : (
          <>
            <Mantine.Button variant="subtle" c={'white'} size="sm" onClick={() => setIsLogin(true)}>
              로그인
            </Mantine.Button>
            <Mantine.Button variant="filled" size="sm">
              회원가입
            </Mantine.Button>
          </>
        )}
      </Mantine.Group>
    </Mantine.Group>
  )
}

export default Header
