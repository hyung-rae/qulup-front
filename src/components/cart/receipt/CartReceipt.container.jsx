import { useRouter } from 'next/router'
import { useMemo } from 'react'

import CartReceiptUI from './CartReceipt.presenter'

const CartReceipt = ({ checkedIds, cartItems }) => {
  const { push } = useRouter()
  const totalPrice = useMemo(() => {
    return cartItems
      .filter(item => checkedIds.includes(item.problemSeq))
      .reduce((acc, item) => acc + item.originalPrice, 0)
  }, [checkedIds, cartItems])

  const calculatedPrice = useMemo(() => {
    return cartItems
      .filter(item => checkedIds.includes(item.problemSeq))
      .reduce((acc, item) => acc + item.calculatedPrice, 0)
  }, [checkedIds, cartItems])

  const totalDiscount = useMemo(() => {
    return totalPrice - calculatedPrice
  }, [totalPrice, calculatedPrice])

  const moveToOrderPage = () => {
    push(`/order?ids=${checkedIds}&totalPrice=${totalPrice}&totalDiscount=${totalDiscount}`)
  }

  return (
    <CartReceiptUI
      moveToOrderPage={moveToOrderPage}
      checkedCount={checkedIds.length}
      totalPrice={totalPrice}
      totalDiscount={totalDiscount}
      calculatedPrice={calculatedPrice}
    />
  )
}

export default CartReceipt
