import { ActionIcon, Button, Group, Image, Indicator, Stack, Text, Title, Flex } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './Header.module.css'
import { IconShoppingCart, IconUserCog } from '@tabler/icons-react'

const HeaderUI = ({ isLogin, onClickSignIn, handleLogOut }) => {
  const { basePath, pathname } = useRouter()

  const moveToSection = section => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <Stack justify="center" gap={10} bg={'dark.7'} h={'100%'}>
      <Group justify="space-around">
        <Link href={'/'}>
          <Image radius="md" w={'auto'} h={20} src={`${basePath}/images/logo.png`} alt={'logo'} />
        </Link>

        {isLogin ? (
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
        ) : (
          <Button size="compact-md" variant="transparent" onClick={onClickSignIn}>
            로그인
          </Button>
        )}
      </Group>
      <Group gap={30} justify="center">
        <Link href={'/problems'} style={{ textDecoration: 'none' }}>
          <Title c={pathname === '/problems' ? 'teal' : 'dark.1'} className={classes.title_btn}>
            문제
          </Title>
        </Link>
        <Link href={'/examProblems'} style={{ textDecoration: 'none' }}>
          <Title c={pathname === '/examProblems' ? 'teal' : 'dark.1'} className={classes.title_btn}>
            모의고사
          </Title>
        </Link>
        <Link href={'/gemstone'} style={{ textDecoration: 'none' }}>
          <Title c={pathname === '/gemstone' ? 'teal' : 'dark.1'} className={classes.title_btn}>
            Math Gemstone
          </Title>
        </Link>
        <Link href={'/service'} style={{ textDecoration: 'none' }}>
          <Title c={pathname === '/service' ? 'teal' : 'dark.1'} className={classes.title_btn}>
            FAQ
          </Title>
        </Link>
      </Group>
      {pathname === '/' && (
        <Group style={{ position: 'absolute', bottom: '-30px', left: '20px' }}>
          <Title c={'dark.1'} className={classes.title_btn} onClick={() => moveToSection('about')}>
            About
          </Title>
          <Title c={'dark.1'} className={classes.title_btn} onClick={() => moveToSection('order')}>
            Order
          </Title>
          <Title c={'dark.1'} className={classes.title_btn} onClick={() => moveToSection('history')}>
            History
          </Title>
          <Title c={'dark.1'} className={classes.title_btn} onClick={() => moveToSection('notice')}>
            Notice
          </Title>
        </Group>
      )}
    </Stack>
  )
}

export default HeaderUI
