import { useRouter } from 'next/router'
import OrderUI from './Order.presenter'
import { cartItemList } from '@/src/components/cart/mock'
import { useState } from 'react'

const Order = () => {
  const {
    query: { ids, totalPrice, totalDiscount },
  } = useRouter()

  const [payMethod, setPayMethod] = useState('card')

  return (
    <OrderUI
      orderItems={cartItemList.filter(item => ids?.includes(item.id))}
      price={totalPrice}
      discount={totalDiscount}
      payMethod={payMethod}
      setPayMethod={setPayMethod}
    />
  )
}

export default Order
