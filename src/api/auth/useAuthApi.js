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
      alert(res.data.message)
      return res.data
    } catch (error) {
      alert(error?.response?.data?.message)
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  /** 로그인 */
  const signIn = async params => {
    setIsLoading(true)
    try {
      const res = await instance.post(`QV1/login.do`, createFormData(params))
      alert(res.data.message)
      return res.data
    } catch (error) {
      alert(res.data.message)
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  /** 새로고침 */
  const refresh = async () => {
    setIsLoading(true)
    try {
      const res = await instance.post(`QV1/refresh.do`)
      return res.data
    } catch (error) {
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  /** 로그아웃 */
  const logout = async () => {
    setIsLoading(true)
    try {
      const res = await instance.post(`/logout.do`)
      return res.data
    } catch (error) {
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  const verificationEmail = async params => {
    setIsLoading(true)
    try {
      const res = await instance.post('QV1/verificationEmail.do', createFormData(params))
      alert(res.data.message)
      return res.data
    } catch (error) {
      alert(error?.response?.data?.message)
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  const verificationPhone = async params => {
    setIsLoading(true)
    try {
      const res = await instance.post('QV1/sendVerificationPhone.do', createFormData(params))
      alert(res.data.message)
      return res.data
    } catch (error) {
      alert(error?.response?.data?.message)
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, signUp, signIn, refresh, logout, verificationEmail, verificationPhone }
}

export default useAuthApi
