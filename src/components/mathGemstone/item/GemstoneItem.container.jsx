import { useState } from 'react'
import GemstoneItemUI from './GemstoneItem.presenter'
import { useMediaQuery } from '@mantine/hooks'
import { useRouter } from 'next/router'

const GemstoneItem = ({ item, open }) => {
  const [isLiked, setIsLiked] = useState(false)
  const matches = useMediaQuery('(min-width: 800px)')

  const { push } = useRouter()

  const moveToOrderPage = () => {
    push(`/order?ids=${item.id}&totalPrice=${item.price}&totalDiscount=${item.discount}`)
  }
  return (
    <GemstoneItemUI
      item={item}
      isLiked={isLiked}
      setIsLiked={setIsLiked}
      matches={matches}
      open={open}
      moveToOrderPage={moveToOrderPage}
    />
  )
}

export default GemstoneItem
