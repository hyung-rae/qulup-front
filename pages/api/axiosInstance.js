import axios from 'axios'

const DEFAULT_URL = 'http://3.35.131.46/'

const axiosInstance = axios.create({
  baseURL: DEFAULT_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true,
})

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  config => {
    config.headers['Cookie'] = 'SESSION=123123123; path=/;'
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default axiosInstance
