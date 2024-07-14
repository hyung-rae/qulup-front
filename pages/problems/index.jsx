import { Card, Container, Modal, Title } from '@mantine/core'
import ArticlesCardsGrid from './ArticlesCardsGrid'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'

const Problems = () => {
  const handleDetailClick = id => {
    console.log('detail click id: ', id)
    detailOpen()
  }
  const handleProblemClick = id => {
    console.log('problem click id: ', id)
  }
  const handleHeartClick = id => {
    if (heartList.includes(id)) {
      setHeartList(heartList.filter(item => item !== id))
    } else {
      setHeartList(prev => [...prev, id])
    }
  }

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)
  const [problemOpened, { open: problemOpen, close: problemClose }] = useDisclosure(false)

  const [heartList, setHeartList] = useState([])

  console.log('heartList: ', heartList)
  return (
    <>
      <Modal opened={detailOpened} size={'lg'} onClose={detailClose} title={'문제 상세보기'} centered></Modal>
      {/* <Modal></Modal> */}
      <Container size={1920}>
        <Title>dkasdas</Title>
        <ArticlesCardsGrid
          heartList={heartList}
          handleProblemClick={handleProblemClick}
          handleDetailClick={handleDetailClick}
          handleHeartClick={handleHeartClick}
        />
      </Container>
    </>
  )
}

export default Problems
