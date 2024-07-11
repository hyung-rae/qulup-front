import * as Mantine from '@mantine/core'
import { IconLogin2 } from '@tabler/icons-react'

const Header = () => {
  return (
    <Mantine.Group h="100%" px="md" justify="center" gap={5}>
      <Mantine.Image radius="md" h={20} src="/logo.png" />
      <Mantine.Button variant="subtle" c={'white'} size="xs">
        로그인
      </Mantine.Button>
      <Mantine.Button variant="filled" size="xs" color="gray">
        회원가입
      </Mantine.Button>
    </Mantine.Group>
  )
}

export default Header
