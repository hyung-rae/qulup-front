import { useEffect, useState } from 'react'
import CartItemUI from './CartItem.presenter'

const CartItem = ({ handleChecked, checkedIds, ...props }) => {
  const { id } = props

  const [isCheck, setIsCheck] = useState(false)

  useEffect(() => {
    checkedIds.includes(id) ? setIsCheck(true) : setIsCheck(false)
  }, [checkedIds])

  return <CartItemUI handleChecked={handleChecked} check={isCheck} {...props} />
}

export default CartItem
