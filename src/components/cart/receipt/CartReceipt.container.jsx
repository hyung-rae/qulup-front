import { useMemo } from 'react'
import CartReceiptUI from './CartReceipt.presenter'
import { cartItemList } from '../mock'

const CartReceipt = ({ checkedIds }) => {
  const totalPrice = useMemo(() => {
    return cartItemList.filter(item => checkedIds.includes(item.id)).reduce((acc, item) => acc + item.price, 0)
  }, [checkedIds])

  const totalDiscount = useMemo(() => {
    return cartItemList.filter(item => checkedIds.includes(item.id)).reduce((acc, item) => acc + item.discount, 0)
  }, [checkedIds])

  return <CartReceiptUI checkedCount={checkedIds.length} totalPrice={totalPrice} totalDiscount={totalDiscount} />
}

export default CartReceipt
