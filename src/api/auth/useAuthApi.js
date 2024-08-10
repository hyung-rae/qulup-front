import { useState } from 'react'
import instance from '../instance'
import { createFormData } from '../utillity/createFormData'

const useAuthApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  /** 회원가입 */
  const signUp = async params => {
    setIsLoading(true)
    try {
      const res = await instance.post(`QV1/createMember.do`, createFormData(params))
      return res.data
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  /** 로그인 */
  const signIn = async params => {
    setIsLoading(true)
    try {
      const res = await instance.post(`QV1/login.do`, createFormData(params))
      return res.data
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, signUp, signIn }
}

export default useAuthApi
