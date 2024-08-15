import { useState } from 'react'
import instance from '../instance'

const useServiceApi = () => {
  const [isLoading, setIsLoading] = useState(false)

  return { isLoading }
}

export default useServiceApi
