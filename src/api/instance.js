import axios from 'axios'

const API_URL = 'http://quluptest.shop'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data; charset=UTF-8',
  },
  withCredentials: true,
})

instance.interceptors.request.use(
  config => {
    console.log(`[${config.method}] ${config.url}`)
    return config
  },
  error => {
    console.log('error :', error)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  response => {
    console.log('[response]', response.data)
    return response
  },
  error => {
    const loginMessage = ['로그인한 사용자 정보가 없습니다.', '로그인을 해주세요.']
    console.log('error?.response?.data?.message:', error?.response?.data?.message)
    if (loginMessage.includes(error?.response?.data?.message)) {
      alert('로그인 후 이용이 가능합니다.')
      window.location.href = '/'
    }
    return Promise.reject(error)
  },
)

export default instance
