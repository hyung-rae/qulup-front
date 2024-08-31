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
      const res = await instance.post(`QV1/favoritesAdd.do`, params)
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
  const getExamProblemList = async page => {
    setIsLoading(true)
    try {
      const res = await instance.get(`QV1/mockexamList.do`)
      // const res = await instance.get(`QV1/mockexamList.do?page=${page}`)
      return res
    } catch (error) {
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  // 모의고사 문제 검색
  const getExamProblemSearch = () => {}

  const getProblemHotList = async code => {
    //
    setIsLoading(true)
    try {
      const res = await instance.get(`QV1/problemHotList.do?code=${code}`)
      return res
    } catch (error) {
      return {}
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    getProblemList,
    postLike,
    getProblemSearch,
    getExamProblemList,
    getExamProblemSearch,
    getProblemHotList,
  }
}

export default useProblemApi
