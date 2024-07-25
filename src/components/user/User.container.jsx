import { IconNews, IconReportMoney, IconSettings } from '@tabler/icons-react'
import UserUI from './User.presenter'

const menu = [
  { id: 1, label: '개인정보 관리', icon: <IconSettings size="1rem" stroke={1.5} /> },
  { id: 2, label: '문제 관리', icon: <IconNews size="1rem" stroke={1.5} /> },
  { id: 3, label: '결제내역 관리', icon: <IconReportMoney size="1rem" stroke={1.5} /> },
]

const User = () => {
  return <UserUI menu={menu} userInfo />
}

export default User
