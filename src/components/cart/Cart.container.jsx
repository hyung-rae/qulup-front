import { useEffect, useState } from 'react'
import CartUI from './Cart.presenter'
import CartItem from './item/CartItem.container'
import { cartItemList } from './mock'
import CartReceipt from './receipt/CartReceipt.container'

const Cart = () => {
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  const [checkedIds, setCheckedIds] = useState([])

  const [cartItems, setCartItems] = useState([])

  const getCartItemList = page => {
    return {
      totalCount: cartItemList.length,
      list: cartItemList.slice(page * 10 - 10, page * 10),
    }
  }

  const handleCheckedAll = event => {
    event.target.checked ? setCheckedIds(new Array(30).fill(1).map((_, i) => i + 1)) : setCheckedIds([])
  }

  const handleChecked = (id, checked) => {
    checked ? setCheckedIds([...checkedIds, id]) : setCheckedIds(checkedIds.filter(i => i !== id))
  }

  useEffect(() => {
    const { totalCount, list } = getCartItemList(page)
    setCartItems(list)
    setTotalCount(totalCount)
  }, [page])

  return (
    <CartUI
      cartReceipt={<CartReceipt checkedIds={checkedIds} />}
      cartItem={cartItems.map(item => (
        <CartItem key={item.id} handleChecked={handleChecked} checkedIds={checkedIds} {...item} />
      ))}
      page={page}
      setPage={setPage}
      totalCount={totalCount}
      checkedIds={checkedIds}
      handleCheckedAll={handleCheckedAll}
    />
  )
}

export default Cart
