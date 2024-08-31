import { useState } from 'react'
import instance from '../instance'

const useBoardApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  const getBBSList = async () => {
    setIsLoading(true)
    try {
      const res = await instance.get(`/QV1/bbsList.do`)
      return res
    } catch {
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, getBBSList }
}

export default useBoardApi
