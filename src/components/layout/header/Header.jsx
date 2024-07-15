import * as Mantine from '@mantine/core'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IconShoppingBag, IconLogout, IconArrowRight, IconUser } from '@tabler/icons-react'

const Header = () => {
  const { push } = useRouter()
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Mantine.Group h="100%" justify="space-between" align="center" p={'md'} px={150}>
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
          <Mantine.Group gap={15}>
            <Mantine.ActionIcon variant="outline" size="md">
              <IconUser style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </Mantine.ActionIcon>

            <Mantine.ActionIcon variant="outline" size="md">
              <IconShoppingBag style={{ width: '70%', height: '70%' }} stroke={1.5} onClick={() => push('/cart')} />
            </Mantine.ActionIcon>

            <Mantine.ActionIcon variant="outline" size="md" onClick={() => setIsLogin(false)}>
              <IconLogout style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </Mantine.ActionIcon>
          </Mantine.Group>
        ) : (
          <>
            <Mantine.Button variant="subtle" size="compact-sm" onClick={() => setIsLogin(true)}>
              로그인
            </Mantine.Button>
            <Mantine.Button variant="outline" size="compact-sm">
              회원가입
            </Mantine.Button>
          </>
        )}
      </Mantine.Group>
    </Mantine.Group>
  )
}

export default Header
