import { ActionIcon, Button, Group, Image, Indicator, Stack, Text } from '@mantine/core'
import { IconShoppingCart, IconUserCog } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './Header.module.css'

const HeaderUI = ({ isLogin, onClickSignIn, handleLogOut }) => {
  const { basePath, pathname } = useRouter()
  return (
    <Stack align="center" justify="center" h={'100%'} bg={'dark.7'} p={5} gap={10}>
      <Group justify="space-between" align={'center'} className={classes.header_container} maw={1920} w={'100%'}>
        <Link href={'/'}>
          <Image
            className={classes.header_logo}
            radius="md"
            w={'auto'}
            h={30}
            src={`${basePath}/images/logo.png`}
            alt={'logo'}
          />
        </Link>

        {isLogin && (
          <Group justify="center">
            <Link href={'/problems'}>
              <Button
                className={classes.header_font}
                variant="subtle"
                size="compact-md"
                color={pathname === '/problems' ? 'teal' : 'white'}
              >
                문제
              </Button>
            </Link>
            <Link href={'/examProblems'}>
              <Button
                className={classes.header_font}
                variant="subtle"
                size="compact-md"
                color={pathname === '/examProblems' ? 'teal' : 'white'}
              >
                모의고사
              </Button>
            </Link>
            <Link href={'/gemstone'}>
              <Button
                className={classes.header_font}
                variant="subtle"
                size="compact-md"
                color={pathname === '/gemstone' ? 'teal' : 'white'}
              >
                Math Gemstone
              </Button>
            </Link>
            <Link href={'/service'}>
              <Button
                className={classes.header_font}
                variant="subtle"
                size="compact-md"
                color={pathname === '/service' ? 'teal' : 'white'}
              >
                FAQ
              </Button>
            </Link>
          </Group>
        )}

        {/* 로그아웃 ui */}
        {!isLogin && (
          <Group gap={15}>
            <Button
              className={`${classes.header_font} ${classes.label}`}
              size="compact-md"
              variant="transparent"
              onClick={onClickSignIn}
            >
              로그인
            </Button>
          </Group>
        )}

        {/* 로그인 ui */}
        {isLogin && (
          <Group gap={15}>
            <Text className={classes.header_font} fz="md" fw="bolder" c="white">
              우형래 님
            </Text>
            <Text className={classes.header_font} fz="md" fw="bolder" c="white">
              280 P
            </Text>

            <Indicator disabled>
              <Link href={'/user/info'}>
                <ActionIcon variant="transparent" color="dark.9" c="white" size="md" radius="sm">
                  <IconUserCog style={{ width: '80%', height: '80%' }} stroke={2} />
                </ActionIcon>
              </Link>
            </Indicator>
            <Indicator color="red" size={5} offset={4}>
              <Link href={'/cart'}>
                <ActionIcon variant="transparent" color="dark.9" c="white" size="md" radius="sm">
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
    </Stack>
  )
}

export default HeaderUI
