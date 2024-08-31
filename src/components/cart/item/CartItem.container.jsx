import { useEffect, useState } from 'react'
import CartItemUI from './CartItem.presenter'

const CartItem = ({ handleChecked, checkedIds, problem, handleRemoveItem }) => {
  const { problemSeq } = problem

  const [isCheck, setIsCheck] = useState(false)

  useEffect(() => {
    checkedIds.includes(problemSeq) ? setIsCheck(true) : setIsCheck(false)
  }, [checkedIds, problemSeq])

  return (
    <CartItemUI handleChecked={handleChecked} handleRemoveItem={handleRemoveItem} check={isCheck} problem={problem} />
  )
}

export default CartItem
