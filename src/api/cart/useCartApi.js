import { useState } from 'react'
import instance from '../instance'

export const mock = [
  {
    id: 1,
    name: '확률과 통계 & 미적분',
    decs: '모의고사 1세트 (미적분 & 확통) 제작 핵심문항 세트제작',
    price: 30000,
    discount: 2000,
  },
  { id: 2, name: '미적분 문제집', decs: '심화 문제를 포함한 미적분 문제집', price: 25000, discount: 1500 },
  { id: 3, name: '기하와 벡터', decs: '기하와 벡터의 기본 및 심화 문제 세트', price: 27000, discount: 3000 },
  { id: 4, name: '확률과 통계 문제집', decs: '확률과 통계 기본 및 응용 문제집', price: 22000, discount: 2500 },
  { id: 5, name: '수학 1 모의고사', decs: '수학 1 모의고사 5회분', price: 20000, discount: 1800 },
  { id: 6, name: '수학 2 문제집', decs: '수학 2의 기본 문제 및 심화 문제집', price: 28000, discount: 3500 },
  { id: 7, name: '고급 미적분', decs: '고급 미적분 문제와 해설 포함', price: 32000, discount: 4000 },
  { id: 8, name: '통계학 기초', decs: '통계학의 기초를 다지는 문제집', price: 26000, discount: 2200 },
  { id: 9, name: '공간 도형', decs: '공간 도형 문제 및 해설 포함', price: 24000, discount: 2800 },
  { id: 10, name: '미적분 심화 문제집', decs: '미적분의 심화 문제만을 다루는 문제집', price: 35000, discount: 3000 },
  { id: 11, name: '확률과 통계 심화', decs: '확률과 통계의 심화 문제를 포함한 문제집', price: 30000, discount: 1500 },
  { id: 12, name: '선형대수학', decs: '선형대수학 문제와 해설 포함', price: 33000, discount: 1200 },
  { id: 13, name: '고급 통계', decs: '고급 통계 문제 및 해설 포함', price: 29000, discount: 2700 },
  { id: 14, name: '이산수학', decs: '이산수학의 기초 및 심화 문제집', price: 31000, discount: 3200 },
  { id: 15, name: '고급 기하와 벡터', decs: '고급 기하와 벡터 문제 포함', price: 34000, discount: 3500 },
  { id: 16, name: '기초 미적분', decs: '기초 미적분 문제 및 해설', price: 23000, discount: 1400 },
  { id: 17, name: '미적분과 통계', decs: '미적분과 통계의 종합 문제집', price: 28000, discount: 2400 },
  { id: 18, name: '수리논리학', decs: '수리논리학 문제와 해설 포함', price: 26000, discount: 1800 },
  { id: 19, name: '통계 실습', decs: '통계 실습 문제집', price: 25000, discount: 1300 },
  { id: 20, name: '고급 수학', decs: '고급 수학 문제 및 해설', price: 35000, discount: 4000 },
  { id: 21, name: '통계학 응용', decs: '통계학의 응용 문제를 다룬 문제집', price: 29000, discount: 2200 },
  { id: 22, name: '수학 문제 풀이', decs: '수학 문제 풀이 문제집', price: 22000, discount: 2000 },
  { id: 23, name: '확률 문제집', decs: '확률 문제 및 해설 포함', price: 26000, discount: 2500 },
  { id: 24, name: '벡터 문제집', decs: '벡터 문제와 해설 포함', price: 24000, discount: 3000 },
  { id: 25, name: '기하 문제집', decs: '기하 문제와 해설 포함', price: 27000, discount: 2800 },
  { id: 26, name: '미적분 연습', decs: '미적분 연습 문제 및 해설', price: 23000, discount: 2100 },
  { id: 27, name: '고급 수리논리', decs: '고급 수리논리 문제 포함', price: 32000, discount: 4000 },
  { id: 28, name: '기초 통계', decs: '기초 통계 문제집', price: 21000, discount: 1700 },
  { id: 29, name: '수학 기초', decs: '수학 기초 문제 및 해설', price: 20000, discount: 1500 },
  { id: 30, name: '고급 미적분 문제집', decs: '고급 미적분 문제와 해설 포함', price: 36000, discount: 3400 },
]

const useCartApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  const getCartItemList = async page => {
    try {
      //   const res = await instance.post(`QV1/cartItemList.do`, params)
      return {
        totalCount: mock.length,
        list: mock.slice(0, 10),
      }
    } catch {
    } finally {
    }
  }

  return { isLoading, getCartItemList }
}

export default useCartApi
