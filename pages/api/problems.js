import axios from 'axios'
import { PROBLEM_DATA, RECOMMEND_DATA } from '@/src/components/problems/mock'

const DEFAULT_URL = 'http://3.35.131.46/QV1'

export const getProblemsData = async ({ page = 1 }) => {
  console.log('API TODO: page, count를 param으로 받아서, 데이터를 보내주세요.')
  // ## API TODO: page, count를 param으로 받아서, 데이터를 보내주세요.
  // ex)
  // const res = await axios.get(`${DEFAULT_URL}/problemList.do`, {
  //   params: { page },
  // })

  // console.log('문제 데이터 응답: ', res)
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

export const postFileDownload = async () => {
  console.log('API TODO: file download')

  const res = await axios.post(`http://3.35.131.46/download`, {
    filePath: '/app/qulup/FileUpload/test.pdf',
  })
  console.log('res: ', res)
  return res.data

  // ## API TODO: file download
  // ex)
  // const res = await axios.get(`https://qulup/api/service`, {
  //   params: { type, page, count },
  // })
  // 임시 코드
  // return { data: RECOMMEND_DATA }
}
