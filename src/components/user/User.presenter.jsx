import { Box, Container, Tabs, Text } from '@mantine/core'
import UserInfo from './info/UserInfo.container'
import Payment from './payment/Payment.container'
import ProblemsManage from './problemsManage/ProblemsManage.container'

const UserUI = ({ menu }) => {
  return (
    <Container maw={1700} m={'auto'} bg={'gray.3'} fluid p={0}>
      <Tabs defaultValue="개인정보 관리" p="xs" color="dark">
        <Tabs.List>
          {menu.map(item => (
            <Tabs.Tab key={item.id} value={item.label} leftSection={item.icon}>
              <Text fz={'md'} fw={700}>
                {item.label}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <Tabs.Panel value="개인정보 관리">
          <Box pt={'xl'}>
            <UserInfo />
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="문제 관리">
          <Box pt={'xl'}>
            <ProblemsManage />
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="결제내역 관리">
          <Box pt={'xl'}>
            <Payment />
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}

export default UserUI
