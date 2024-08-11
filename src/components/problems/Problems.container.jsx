import { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import ProblemsUI from './Problems.presenter'
import DetailModal from './detail/DetailModal.container'
import { PROBLEM_DATA } from '@/src/components/problems/mock'
import useProblemApi from '@/src/api/problem/useProblemApi'

const Problems = () => {
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [heartList, setHeartList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [checkedList, setCheckedList] = useState([])
  const [problemsData, setProblemsData] = useState([])
  const [recommendData, setRecommendData] = useState([])
  const [placeholder, setPlaceholder] = useState({
    academy: true,
    problem: true,
  })
  const [articleId, setArticleId] = useState(0)

  const { problemList } = useProblemApi()

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)

  const handleDetailClick = id => {
    console.log('####', id)
    setArticleId(id)
    handleGetRecommendData(id)
    detailOpen()
  }
  const handleProblemClick = id => {
    if (checkedList.includes(id)) {
      setCheckedList(checkedList.filter(item => item !== id))
    } else {
      setCheckedList(prev => [...prev, id])
    }
  }
  const handleHeartClick = id => {
    if (heartList.includes(id)) {
      setHeartList(heartList.filter(item => item !== id))
    } else {
      setHeartList(prev => [...prev, id])
    }
  }

  const handleAllCheck = () => {
    const idList = PROBLEM_DATA.map(el => el.id)
    setCheckedList(idList)
  }

  const handleSearch = () => {}

  const handleGetProblemsData = async page => {
    // ## API TODO: page에 맞는 문제를 보내주시면 됩니다. 추후, 제외학원과 제외단원 등을 추가 입력받으면 됩니다.
    let res = await problemList({ page: page - 1 })
    setTotalCount(res.list.totalElements)
    setProblemsData(res.list.content)
  }

  const handleGetRecommendData = async () => {
    // ## API TODO: 추천 아이템은, 클릭한 문제 ID를 받아서 해당 아이디에 맞는 추천 문제들을 보내주시면 됩니다.
    // let res = await getRecommendData({ articleId })
    // setRecommendData(res.data)
  }

  useEffect(() => {
    handleGetProblemsData(page)
  }, [page])

  return (
    <>
      <DetailModal
        detailOpened={detailOpened}
        detailClose={detailClose}
        articleId={articleId}
        problemsData={problemsData}
        recommendData={recommendData}
      />
      <ProblemsUI
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        heartList={heartList}
        setHeartList={setHeartList}
        handleAllCheck={handleAllCheck}
        handleDetailClick={handleDetailClick}
        handleProblemClick={handleProblemClick}
        handleHeartClick={handleHeartClick}
        placeholder={placeholder}
        setPlaceholder={setPlaceholder}
        problemsData={problemsData}
        page={page}
        setPage={setPage}
        totalCount={totalCount}
      />
    </>
  )
}

export default Problems
