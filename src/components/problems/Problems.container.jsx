import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import ProblemsUI from './Problems.presenter'
import DetailModal from './detail/DetailModal.container'
import { PROBLEM_DATA } from '@/src/mock-data/dummy'

const Problems = () => {
  const [searchText, setSearchText] = useState('')
  const [heartList, setHeartList] = useState([])
  const [checkedList, setCheckedList] = useState([])
  const [placeholder, setPlaceholder] = useState({
    academy: true,
    problem: true,
  })

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)

  const handleDetailClick = id => {
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

  return (
    <>
      <DetailModal detailOpened={detailOpened} detailClose={detailClose} />
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
        data={PROBLEM_DATA}
      />
    </>
  )
}

export default Problems
