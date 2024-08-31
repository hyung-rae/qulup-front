import { useRouter } from 'next/router'
import { userState } from '../services/user'
import { useRecoilValue } from 'recoil'
import { useEffect } from 'react'

const AuthProvider = ({ children }) => {
  // const router = useRouter()
  // const userInfo = useRecoilValue(userState)
  // useEffect(() => {
  //   if (router.pathname === '/') return
  //   if (!userInfo.id || !userInfo.mberSeq) {
  //     alert('로그인후 이용 가능합니다.')
  //     router.push('/')
  //   }
  // }, [router.pathname, userInfo.id])
  return <>{children}</>
}

export default AuthProvider
