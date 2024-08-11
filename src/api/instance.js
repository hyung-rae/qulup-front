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
    console.log('error :', error)
    // alert('잠시후 다시 시도해주세요.')
    return Promise.reject(error)
  },
)

export default instance
