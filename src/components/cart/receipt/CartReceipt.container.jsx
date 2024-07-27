import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { cartItemList } from '../mock'
import CartReceiptUI from './CartReceipt.presenter'

const CartReceipt = ({ checkedIds }) => {
  const { push } = useRouter()
  const totalPrice = useMemo(() => {
    return cartItemList.filter(item => checkedIds.includes(item.id)).reduce((acc, item) => acc + item.price, 0)
  }, [checkedIds])

  const totalDiscount = useMemo(() => {
    return cartItemList.filter(item => checkedIds.includes(item.id)).reduce((acc, item) => acc + item.discount, 0)
  }, [checkedIds])

  const moveToOrderPage = () => {
    push(`/order?ids=${checkedIds}&totalPrice=${totalPrice}&totalDiscount=${totalDiscount}`)
  }

  return (
    <CartReceiptUI
      moveToOrderPage={moveToOrderPage}
      checkedCount={checkedIds.length}
      totalPrice={totalPrice}
      totalDiscount={totalDiscount}
    />
  )
}

export default CartReceipt
