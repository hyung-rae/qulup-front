import axios from 'axios'
const DEFAULT_URL = 'http://3.35.131.46/'

const axiosInstance = axios.create({
  baseURL: `${DEFAULT_URL}`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true, // 쿠키를 포함하도록 설정
})

// 인터셉터 설정
axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export const postSignUp = async params => {
  console.log('API TODO: 데이터를 param으로 받아서, 데이터를 보내주세요.')
  try {
    const res = await axiosInstance.post(`${DEFAULT_URL}QV1/createMember.do`, params)
    return res.data
  } catch (error) {
    console.error('API 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}

export const postVerificationEmail = async params => {
  try {
    const formData = new FormData()
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        formData.append(key, params[key])
      }
    }

    const res = await axiosInstance.post('QV1/verificationEmail.do', formData)

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
    const formData = new FormData()
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        formData.append(key, params[key])
      }
    }

    const res = await axiosInstance.post(`${DEFAULT_URL}QV1/sendVerificationPhone.do`, formData)
    console.log('핸드폰인증 params:', params)
    console.log('핸드폰인증 응답: ', res)
    return res.data
  } catch (error) {
    console.error('API 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}
