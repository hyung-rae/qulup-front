import axios from 'axios'

const DEFAULT_URL = 'http://quluptest.shop/'

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
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default axiosInstance
