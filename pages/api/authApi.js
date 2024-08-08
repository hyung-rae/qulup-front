import axiosInstance from './axiosInstance'
import { createFormData } from './createFormData'
// import axios from 'axios'

// const DEFAULT_URL = 'http://3.35.131.46/'

// const axiosInstance = axios.create({
//   baseURL: DEFAULT_URL,
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
//   withCredentials: true,
// })

// 회원가입 api
export const postSignUp = async params => {
  try {
    // const res = await axiosInstance.post(`QV1/createMember.do`, createFormData(params))
    const res = await axiosInstance.post(`QV1/createMember.do`, createFormData(params))
    console.log('res: ', res)
    return res.data
  } catch (error) {
    console.error('회원가입 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}

// 로그인 api
export const postSignIn = async params => {
  try {
    const res = await axiosInstance.post(`QV1/signIn.do`, createFormData(params))
    const sessionKey = res.data.sessionKey
    if (sessionKey) {
      localStorage.setItem('sessionKey', sessionKey) // sessionKey를 로컬 스토리지에 저장
    }
    return res.data
  } catch (error) {
    console.error('로그인 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}

// 이메일 인증 api
export const postVerificationEmail = async params => {
  try {
    const res = await axiosInstance.post('QV1/verificationEmail.do', createFormData(params))

    return res.data
  } catch (error) {
    console.error('이메일 인증 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}

// 휴대폰 인증 api
export const postVerificationPhone = async params => {
  try {
    const res = await axiosInstance.post(`QV1/sendVerificationPhone.do`, createFormData(params))
    return res.data
  } catch (error) {
    console.error('휴대폰 인증 요청 중 에러 발생: ', error)
    throw error // 에러를 호출한 쪽으로 전달
  }
}

// 휴대폰 인증 api
export const getTest = async params => {
  try {
    const { test } = params
    const res = await axiosInstance.get(`/saveToSession?value=${test}`)
    return res.data
  } catch (error) {
    throw error // 에러를 호출한 쪽으로 전달
  }
}

// 휴대폰 인증 api
export const getFromSession = async () => {
  try {
    const res = await axiosInstance.get(`/getFromSession`)
    return res.data
  } catch (error) {
    throw error // 에러를 호출한 쪽으로 전달
  }
}
