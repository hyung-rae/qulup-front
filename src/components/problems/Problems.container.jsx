import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import ProblemsUI from './Problems.presenter'
import DetailModal from './detail/DetailModal.container'

const Problems = () => {
  const [searchText, setSearchText] = useState('')
  const [heartList, setHeartList] = useState([])
  const [checkedList, setCheckedList] = useState([])

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

  const handleSearch = () => {}

  return (
    <>
      <DetailModal detailOpened={detailOpened} detailOpen={detailOpen} detailClose={detailClose} />
      <ProblemsUI
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        heartList={heartList}
        setHeartList={setHeartList}
        handleDetailClick={handleDetailClick}
        handleProblemClick={handleProblemClick}
        handleHeartClick={handleHeartClick}
      />
    </>
  )
}

export default Problems
