import axios from 'axios'

const DEFAULT_URL = 'http://3.35.131.46/QV1'
export const postSignUp = async params => {
  console.log('API TODO: 데이터를 param으로 받아서, 데이터를 보내주세요.')
  try {
    const res = await axios.post(`${DEFAULT_URL}/createMember.do`, params)
    console.log('params: ', params)
    console.log('res: ', res)
    return res.data
  } catch (error) {
    console.error('API 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}

export const postVerificationEmail = async params => {
  try {
    const res = await axios.post(`${DEFAULT_URL}/verificationEmail.do`, params)
    console.log('이메일인증 param: ', params)
    console.log('이메일인증 응답: ', res)
    return res.data
  } catch (error) {
    console.error('API 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}

export const postVerificationPhone = async params => {
  try {
    const res = await axios.post(`${DEFAULT_URL}/sendVerificationPhone.do`, params)
    console.log('핸드폰인증 params:', params)
    console.log('핸드폰인증 응답: ', res)
    return res.data
  } catch (error) {
    console.error('API 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}
