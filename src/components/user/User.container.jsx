import UserUI from './User.presenter'
import { Box, Container, Grid, NavLink, Paper, Stack, Title } from '@mantine/core'
import { useState } from 'react'
import { IconSettings, IconReportMoney, IconNews } from '@tabler/icons-react'
import UserInfo from './info/UserInfo.container'
import Problems from './problems/Problems.container'
import Payment from './payment/Payment.container'

const menu = [
  { id: 1, label: '개인정보 관리', icon: <IconSettings size="1rem" stroke={1.5} /> },
  { id: 2, label: '문제 관리', icon: <IconNews size="1rem" stroke={1.5} /> },
  { id: 3, label: '결제내역 관리', icon: <IconReportMoney size="1rem" stroke={1.5} /> },
]

const User = () => {
  const [active, setActive] = useState(1)

  const onClickMenu = id => {
    setActive(id)
  }
  return (
    <UserUI menu={menu} active={active} onClickMenu={onClickMenu}>
      {active === 1 && <UserInfo />}
      {active === 2 && <Problems />}
      {active === 3 && <Payment />}
    </UserUI>
  )
}

export default User
