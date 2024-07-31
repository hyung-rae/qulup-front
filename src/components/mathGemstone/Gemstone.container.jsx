import { useEffect, useState } from 'react'
import GemstoneUI from './Gemstone.presenter'
import { gemstoneItemList } from './mock'
import Comment from './comment/Comment.container'
import { useDisclosure } from '@mantine/hooks'

const Gemstone = () => {
  const [page, setPage] = useState(1)
  const [sortType, setSortType] = useState('greatest')
  const [gemstone, setGemstone] = useState([])

  const [opened, { open, close }] = useDisclosure(false)

  const getGemstoneItemList = page => {
    return gemstoneItemList.slice(page * 10 - 10, page * 10)
  }

  useEffect(() => {
    const list = getGemstoneItemList(page)
    setGemstone(list)
  }, [page])
  return (
    <>
      <Comment opened={opened} onClose={close} />
      <GemstoneUI
        sortType={sortType}
        setSortType={setSortType}
        gemstone={gemstone}
        page={page}
        setPage={setPage}
        open={open}
      />
    </>
  )
}

export default Gemstone
