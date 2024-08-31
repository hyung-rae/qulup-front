import { useState } from 'react'
import instance from '../instance'

const useInquiryApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  const postInquiryAdd = async params => {
    setIsLoading(true)
    try {
      const res = await instance.post(`QV1/inquiryAdd.do`, params)
      return res
    } catch {
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, postInquiryAdd }
}

export default useInquiryApi
