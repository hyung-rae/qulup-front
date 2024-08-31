import { useState } from 'react'
import instance from '../instance'

const useServiceApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  const getFAQList = async params => {
    const { page } = params
    setIsLoading(true)
    try {
      const res = await instance.get(`QV1/faqList.do?page=${page}`)
      return res.data.FAQList
    } catch (error) {
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  const getInqueryList = async params => {
    const { page } = params
    setIsLoading(true)
    try {
      const res = await instance.get(`QV1/inquiryList.do?page=${page}`)
      return res.data.InquiryList
    } catch (error) {
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, getFAQList, getInqueryList }
}

export default useServiceApi
