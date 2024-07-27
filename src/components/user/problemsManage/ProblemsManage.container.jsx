import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'

import DetailModal from './detail/DetailModal.container'
import RequestModal from './request/RequestModal.container'
import ProblemsManageUI from './ProblemsManage.presenter'

import { PROBLEM_DATA } from '@/src/mock-data/dummy'

const ProblemsManage = () => {
  const [heartList, setHeartList] = useState([])
  const [checkedList, setCheckedList] = useState([])
  const [tabValue, setTabValue] = useState('buy') // buy or favorite

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

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)
  const [reQuestOpened, { open: reQuestOpen, close: reQuestClose }] = useDisclosure(false)

  const handleReQuest = () => {
    reQuestOpen()
  }
  const handleBuy = () => {}

  const handleAllCheck = () => {
    const idList = PROBLEM_DATA.map(el => el.id)
    console.log(idList, checkedList)
    setCheckedList([...idList])
  }

  return (
    <>
      <DetailModal detailOpened={detailOpened} detailOpen={detailOpen} detailClose={detailClose} />
      <RequestModal reQuestOpened={reQuestOpened} reQuestOpen={reQuestOpen} reQuestClose={reQuestClose} />

      <ProblemsManageUI
        handleDetailClick={handleDetailClick}
        handleProblemClick={handleProblemClick}
        handleHeartClick={handleHeartClick}
        tabValue={tabValue}
        setTabValue={setTabValue}
        heartList={heartList}
        setHeartList={setHeartList}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        handleReQuest={handleReQuest}
        handleBuy={handleBuy}
        handleAllCheck={handleAllCheck}
        data={PROBLEM_DATA}
      />
    </>
  )
}

export default ProblemsManage
