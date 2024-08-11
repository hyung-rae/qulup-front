import { useEffect } from 'react'
import { userState } from '@/src/services/user'
import UserInfoUI from './UserInfo.presenter'

// lib
import { useForm } from '@mantine/form'
import { useRecoilValue } from 'recoil'

const UserInfo = () => {
  const user = useRecoilValue(userState)
  const form = useForm({
    initialValues: {
      nickname: user?.nickname,
      phone: user?.phone,
      password: '',
      confirmPassword: '',
    },

    validate: {
      phone: value => (/^\d{10,11}$/.test(value) ? null : '올바른 휴대폰 번호를 입력하세요.'),
      password: value => (value.length < 6 ? '비밀번호는 6자 이상이어야 합니다.' : null),
      confirmPassword: (value, values) => (value !== values.password ? '비밀번호가 일치하지 않습니다.' : null),
    },
  })

  const handleSubmit = () => {
    if (form.validate().hasErrors) return
    const param = form.values
    // TODO: 유저정보 수정 patch api는 여기에
    // await patchChangeUserInfo(param)
  }

  useEffect(() => {
    form.setValues({
      nickname: user?.nickname || '',
      phone: user?.phone || '',
    })
  }, [user])

  return <UserInfoUI form={form} user={user} handleSubmit={handleSubmit} />
}

export default UserInfo
