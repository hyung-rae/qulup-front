import axios from 'axios'

const DEFAULT_URL = 'http://3.35.131.46/'

const axiosInstance = axios.create({
  baseURL: DEFAULT_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  // withCredentials: true,
})

// 인터셉터 설정
axiosInstance.interceptors.request.use(
  config => {
    const sessionKey = localStorage.getItem('sessionKey')
    if (sessionKey) {
      // FormData로 변환된 경우를 고려한 처리
      if (config.data instanceof FormData) {
        config.data.append('sessionKey', sessionKey)
      } else {
        config.data = { ...config.data, sessionKey } // 요청 본문에 sessionKey 추가
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default axiosInstance
