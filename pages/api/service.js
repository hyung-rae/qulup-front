import axios from 'axios'
import { FAQ_DEFAULT, INQUIRY_DEFAULT } from '@/src/components/service/mock'

export const getBoardData = async ({ type = 'faq', page = 1, count = 10 }) => {
  // ## API TODO: type, page, count를 param으로 받아서, 데이터를 보내주세요.
  // ex)
  // const res = await axios.get(`https://qulup/api/service`, {
  //   params: { type, page, count },
  // })
  // return res.data

  // 임시 코드
  if (type === 'faq') {
    return { data: FAQ_DEFAULT, totalCount: 56 }
  } else if (type === 'inquiry') {
    return { data: INQUIRY_DEFAULT, totalCount: 48 }
  }
}

export const getSearchBoardData = async ({ type = 'faq', page = 1, count = 10, content = '' }) => {
  // ## API TODO: type, page, count, content를 param으로 받아서, 데이터를 보내주세요.
}
