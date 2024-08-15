import { useRouter } from 'next/router'
import OrderUI from './Order.presenter'
import { cartItemList } from '@/src/components/cart/mock'
import { useState } from 'react'
import useOrderApi from '@/src/api/order/useOrderApi'

const Order = () => {
  const [userPoint, setUserPoint] = useState(2000)
  const [point, setPoint] = useState(0)

  const [payMethod, setPayMethod] = useState('card')

  const {
    query: { ids, totalPrice, totalDiscount },
  } = useRouter()

  const { postPG } = useOrderApi()

  const handlePG = async () => {
    alert('PG!')
    await postPG()
  }

  return (
    <OrderUI
      orderItems={cartItemList.filter(item => ids?.includes(item.id))}
      price={totalPrice}
      discount={totalDiscount}
      payMethod={payMethod}
      setPayMethod={setPayMethod}
      point={point}
      setPoint={setPoint}
      userPoint={userPoint}
      handlePG={handlePG}
    />
  )
}

export default Order
