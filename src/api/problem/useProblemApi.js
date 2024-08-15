import { useState } from 'react'
import instance from '../instance'

const useProblemApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  // 문제 리스트
  const getProblemList = async params => {
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

  // 문제 좋아요
  const postLike = async params => {
    try {
      const res = await instance.post(`QV1/likeProblem.do`, params)
    } catch {
    } finally {
    }
  }

  // 문제 검색
  const getProblemSearch = async params => {
    const { page, searchAcademy, searchProblem, searchDifficulty } = params
    setIsLoading(true)
    try {
      const res = await instance.get(`QV1/problemSearch.do?page=${page}&difficulty=${searchDifficulty}`)
      return res.data.ProblemList
    } catch {
    } finally {
      setIsLoading(false)
    }
  }

  // 모의고사 문제 리스트
  const getExamProblemList = () => {}

  // 모의고사 문제 검색
  const getExamProblemSearch = () => {}

  return { isLoading, getProblemList, postLike, getProblemSearch, getExamProblemList, getExamProblemSearch }
}

export default useProblemApi
