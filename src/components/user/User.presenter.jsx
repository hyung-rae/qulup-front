import { Box, Container, Paper, Tabs, Text } from '@mantine/core'
import UserInfo from './info/UserInfo.container'
import ProblemsManage from './problemsManage/ProblemsManage.container'
import Payment from './payment/Payment.container'

const UserUI = ({ menu }) => {
  return (
    <Container maw={1200} m={'auto'} bg={'gray.3'} fluid p={0}>
      <Tabs siz defaultValue="개인정보 관리" p="xs" color="dark">
        <Tabs.List>
          {menu.map(item => (
            <Tabs.Tab key={item.id} value={item.label} leftSection={item.icon}>
              <Text fz={'xs'} fw={700}>
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
          <Box>
            <Payment />
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}

export default UserUI
