import { useState } from 'react'
import instance from '../instance'
import { createFormData } from '../utillity/createFormData'

const useProblemApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  /** 회원가입 */
  const problemList = async params => {
    const { page } = params
    setIsLoading(true)
    try {
      const res = await instance.get(`QV1/problemList.do?page=${page}`)
      return res.data.ProblemList
    } catch (error) {
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, problemList }
}

export default useProblemApi
