import { ActionIcon, Button, Flex, Group, Image, Indicator, Stack, Text, Tooltip } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './Header.module.css'
import { IconShoppingCart, IconUserCog, IconNews } from '@tabler/icons-react'

const HeaderUI = ({ isLogin, onClickSignIn, handleLogOut }) => {
  const { basePath, pathname } = useRouter()
  return (
    <Stack justify="flex-end" h={'100%'} bg={'dark.7'} p={5} gap={10}>
      <Group justify="space-around" align={'center'} className={classes.header_container}>
        <Link href={'/'}>
          <Image radius="md" w={'auto'} h={20} src={`${basePath}/images/logo.png`} alt={'logo'} />
        </Link>

        {/* 로그아웃 ui */}
        {!isLogin && (
          <Group gap={15}>
            <Button size="compact-md" variant="transparent" className={classes.label} onClick={onClickSignIn}>
              로그인
            </Button>
          </Group>
        )}

        {/* 로그인 ui */}
        {isLogin && (
          <Group gap={15}>
            <Text fz="sm" fw="bolder" c="white">
              우형래 님
            </Text>
            <Text fz="sm" fw="bolder" c="white">
              280 P
            </Text>

            <Indicator disabled>
              <Link href={'/user/info'}>
                <ActionIcon variant="transparent" color="dark.9" c="white" size="sm" radius="sm">
                  <IconUserCog style={{ width: '80%', height: '80%' }} stroke={2} />
                </ActionIcon>
              </Link>
            </Indicator>
            <Indicator color="red" size={5} offset={4}>
              <Link href={'/cart'}>
                <ActionIcon variant="transparent" color="dark.9" c="white" size="sm" radius="sm">
                  <IconShoppingCart style={{ width: '80%', height: '80%' }} stroke={2} />
                </ActionIcon>
              </Link>
            </Indicator>
            <Button size="compact-xs" onClick={handleLogOut}>
              로그아웃
            </Button>
          </Group>
        )}
      </Group>
      <Group justify="center">
        <Link href={'/problems'}>
          <Button variant="subtle" size="compact-sm" color={pathname === '/problems' ? 'teal' : 'white'}>
            문제
          </Button>
        </Link>
        <Link href={'/examProblems'}>
          <Button variant="subtle" size="compact-sm" color={pathname === '/examProblems' ? 'teal' : 'white'}>
            모의고사
          </Button>
        </Link>
        <Link href={'/gemstone'}>
          <Button variant="subtle" size="compact-sm" color={pathname === '/gemstone' ? 'teal' : 'white'}>
            Math Gemstone
          </Button>
        </Link>
        <Link href={'/service'}>
          <Button variant="subtle" size="compact-sm" color={pathname === '/service' ? 'teal' : 'white'}>
            고객센터
          </Button>
        </Link>
      </Group>
    </Stack>
  )
}

export default HeaderUI
