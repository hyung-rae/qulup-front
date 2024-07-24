import { ActionIcon, Button, Flex, Group, Image, Indicator, Text, Tooltip } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './Header.module.css'
import { IconShoppingCart, IconUserCog, IconNews } from '@tabler/icons-react'

const HeaderUI = ({ isLogin, onClickSignIn, handleLogOut }) => {
  const { basePath } = useRouter()
  return (
    <Flex bg={'dark.7'} align={'center'} h={'100%'} w={'100%'} className={classes.header_container}>
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
        <Flex direction="column" gap={15} pt="sm" className={classes.user_section}>
          <Group gap={15}>
            <Group gap={10}>
              <Text fz="sm" fw="bolder" c="white">
                우형래 님
              </Text>
              <Text fz="sm" fw="bolder" c="white">
                280 P
              </Text>
            </Group>

            <Group gap={5}>
              <Link href={'/service'}>
                <Button color="dark" size="compact-xs">
                  고객센터
                </Button>
              </Link>

              <Button variant="default" size="compact-xs" onClick={handleLogOut}>
                로그아웃
              </Button>
            </Group>
          </Group>

          <Group justify="flex-end" gap={10}>
            <Tooltip label={<Text fz={10}>Math Gemstone</Text>} position="bottom" offset={0} color="dark.9">
              <Indicator disabled>
                <Link href={'/gemstone'}>
                  <ActionIcon variant="transparent" color="dark.9" c="white" size="md" radius="md">
                    <IconNews style={{ width: '80%', height: '80%' }} stroke={2} />
                  </ActionIcon>
                </Link>
              </Indicator>
            </Tooltip>

            <Tooltip label={<Text fz={10}>마이페이지</Text>} position="bottom" offset={0} color="dark.9">
              <Indicator disabled>
                <Link href={'/user/info'}>
                  <ActionIcon variant="transparent" color="dark.9" c="white" size="md" radius="md">
                    <IconUserCog style={{ width: '80%', height: '80%' }} stroke={2} />
                  </ActionIcon>
                </Link>
              </Indicator>
            </Tooltip>

            <Tooltip label={<Text fz={10}>장바구니</Text>} position="bottom" offset={0} color="dark.9">
              <Indicator color="red" size={5} offset={4}>
                <Link href={'/cart'}>
                  <ActionIcon variant="transparent" color="dark.9" c="white" size="md" radius="md">
                    <IconShoppingCart style={{ width: '80%', height: '80%' }} stroke={2} />
                  </ActionIcon>
                </Link>
              </Indicator>
            </Tooltip>
          </Group>
        </Flex>
      )}
    </Flex>
  )
}

export default HeaderUI
