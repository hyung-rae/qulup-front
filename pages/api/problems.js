// import axios from 'axios'
import { PROBLEM_DATA, RECOMMEND_DATA } from '@/src/components/problems/mock'

export const getProblemsData = async ({ page = 1, count = 10 }) => {
  console.log('API TODO: page, count를 param으로 받아서, 데이터를 보내주세요.')
  // ## API TODO: page, count를 param으로 받아서, 데이터를 보내주세요.
  // ex)
  // const res = await axios.get(`https://qulup/api/service`, {
  //   params: { type, page, count },
  // })
  // return res.data
  // 임시 코드
  return { data: PROBLEM_DATA }
}
export const getRecommendData = async ({ page = 1, count = 10 }) => {
  console.log('API TODO: page, count를 param으로 받아서, 데이터를 보내주세요.')
  // ## API TODO: page, count를 param으로 받아서, 데이터를 보내주세요.
  // ex)
  // const res = await axios.get(`https://qulup/api/service`, {
  //   params: { type, page, count },
  // })
  // return res.data
  // 임시 코드
  return { data: RECOMMEND_DATA }
}
