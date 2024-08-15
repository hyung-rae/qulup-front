import { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import ProblemsUI from './Problems.presenter'
import DetailModal from './detail/DetailModal.container'
import useProblemApi from '@/src/api/problem/useProblemApi'

const Problems = () => {
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [heartList, setHeartList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [checkedList, setCheckedList] = useState([])
  const [problemsData, setProblemsData] = useState([])
  const [placeholder, setPlaceholder] = useState({
    academy: true,
    problem: true,
    difficulty: true,
  })
  const [articleId, setArticleId] = useState(0)
  const [searchAcademy, setSearchAcademy] = useState([])
  const [searchProblem, setSearchProblem] = useState([])
  const [searchDifficulty, setSearchDifficulty] = useState([])

  const { getProblemList, getProblemSearch } = useProblemApi()

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)

  // 문제 이미지 클릭했을때, 문제 상세보기 모달을 여는 로직
  const handleDetailClick = id => {
    setArticleId(id)
    detailOpen()
  }

  // 문제를 선택했을때 문제 체크하는 로직
  const handleProblemClick = id => {
    if (checkedList.includes(id)) {
      setCheckedList(checkedList.filter(item => item !== id))
    } else {
      setCheckedList(prev => [...prev, id])
    }
  }

  // 문제 전채선택 로직
  const handleAllCheck = () => {
    const idList = problemsData.map(el => el.problemSeq)
    setCheckedList(idList)
  }

  // 검색한 문제 리스트 불러오는 함수
  const handleSearch = async page => {
    let res = await getProblemSearch({ page: page - 1, searchAcademy, searchProblem, searchDifficulty })
    setTotalCount(res.list.totalElements)
    setProblemsData(res.list.content)
  }

  // 문제 리스트 불러오는 함수
  const handleGetProblemsData = async page => {
    // ## API TODO: page에 맞는 문제를 보내주시면 됩니다. 추후, 제외학원과 제외단원 등을 추가 입력받으면 됩니다.
    let res = await getProblemList({ page: page - 1 })
    setTotalCount(res.list.totalElements)
    setProblemsData(res.list.content)
  }

  const handleAllProblemBuy = () => {}

  // const handleGet

  // 페이지가 최초로 랜더링될때 / page가 변경될때마다 문제를 불러오는 함수 실행
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
        recommendData={problemsData}
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
        placeholder={placeholder}
        setPlaceholder={setPlaceholder}
        problemsData={problemsData}
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        handleAllProblemBuy={handleAllProblemBuy}
        setSearchAcademy={setSearchAcademy}
        setSearchProblem={setSearchProblem}
        setSearchDifficulty={setSearchDifficulty}
      />
    </>
  )
}

export default Problems
