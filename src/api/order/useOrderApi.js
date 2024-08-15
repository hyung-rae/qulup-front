import { useState } from 'react'
import instance from '../instance'

const useOrderApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  const postPG = async () => {
    const res = await instance.post(`QV1/pg.do`)
    return res
  }

  return { isLoading, postPG }
}

export default useOrderApi
