import { useState } from 'react'
import FindUI from './Find.presenter'

const Find = ({ opened, onClose }) => {
  const [tabValue, setTabValue] = useState('id') // id or pw
  const [uiType, setUiType] = useState('find') // find or id or pw
  const [userId, setUserId] = useState('')

  const handleFindId = () => {
    // ## API TODO: id 찾는 api. response값으로 사용자 id를 반환해주면 됩니다

    // api 요청 성공시
    setUserId('qulup@example.com')
    setUiType('id')

    // 실패시
    // ...nothing
  }

  const handleChangePassword = () => {
    // 입력한 ID와 비교하여, 유효한 값일경우 pw를 설정하는 창으로 넘겨준다.

    // ## API TODO: 아이디와 가입시 이메일을 비교하고, 가입시 입력받은 핸드폰이나 이메일로 인증문자를 보내서 인증번호를 체크하면 됩니다.
    setUiType('pw')
  }

  const handleChangePasswordDone = ({ authNumber, newPassword }) => {
    // ## API TODO: 최종적으로 pw 변경하는 api. post 요청으로, body에 인증번호와 pw 담아서 넘겨줄 예정

    // 성공시
    handleModalClose()

    // 실패시
    // ...nothing
  }

  const handleModalClose = () => {
    setTabValue('id')
    setUiType('find')
    setUserId('')
    onClose()
  }

  return (
    <>
      <FindUI
        opened={opened}
        onClose={handleModalClose}
        tabValue={tabValue}
        setTabValue={setTabValue}
        handleFindId={handleFindId}
        handleChangePassword={handleChangePassword}
        handleChangePasswordDone={handleChangePasswordDone}
        userId={userId}
        uiType={uiType}
        setUiType={setUiType}
      />
    </>
  )
}

export default Find
