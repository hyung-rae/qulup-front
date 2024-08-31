import { useEffect, useMemo, useState } from 'react'
import DetailModalUI from './DetailModal.presenter'
import useProblemApi from '@/src/api/problem/useProblemApi'

const DetailModal = ({ ...props }) => {
  const { problemsData, articleId } = props

  const { getProblemHotList } = useProblemApi()
  const [recommendList, setRecommendList] = useState([])

  const problemData = useMemo(() => problemsData.find(el => el.problemSeq === articleId), [problemsData, articleId])

  const handleRecommendClick = () => {}
  const handleRecommendList = async code => {
    try {
      const { data } = await getProblemHotList(code)
      console.log('hotlist::::', data)
      setRecommendList(data.problemHotList)
    } catch {
      setRecommendList([])
    }
  }

  useEffect(() => {
    if (!problemData || !problemData?.code) return
    handleRecommendList(problemData?.code)
  }, [articleId, problemData])

  return (
    <DetailModalUI
      {...props}
      handleRecommendClick={handleRecommendClick}
      recommendList={recommendList}
      problemData={problemData}
    />
  )
}

export default DetailModal
