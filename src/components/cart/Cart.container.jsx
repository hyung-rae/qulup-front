import useCartApi from '@/src/api/cart/useCartApi'
import { useEffect, useState } from 'react'
import CartUI from './Cart.presenter'
import CartItem from './item/CartItem.container'
import CartReceipt from './receipt/CartReceipt.container'

const Cart = () => {
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [checkedIds, setCheckedIds] = useState([])
  const [totalCartIds, setTotalCartIds] = useState([])
  const [cartItems, setCartItems] = useState([])

  const { getCartItemList } = useCartApi()

  const handleCheckedAll = event => {
    event.target.checked ? setCheckedIds(totalCartIds) : setCheckedIds([])
  }

  const handleChecked = id => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter(item => item !== id))
    } else {
      setCheckedIds(prev => [...prev, id])
    }
  }

  const handleGetCartListIds = async () => {
    try {
      if (!localStorage.getItem('problemList')) return
      let list = localStorage.getItem('problemList').split(',')

      setTotalCartIds(list)
      setTotalCount(list.length || 0)
      setCheckedIds(list)
    } catch {
      setCheckedIds([])
      setTotalCount(0)
    }
  }

  const handleRemoveItem = problemSeq => {
    setTotalCartIds(totalCartIds.filter(item => item !== problemSeq))
    if (totalCartIds.length === 0) {
      localStorage.removeItem('problemList')
    } else {
      localStorage.setItem(
        'problemList',
        totalCartIds.filter(item => item !== problemSeq),
      )
    }
  }

  const handleSplitCartIdList = (page, count = 10) => {
    const startIndex = (page - 1) * count
    const endIndex = startIndex + count
    return totalCartIds.slice(startIndex, endIndex)
  }

  const handleGetCartList = async page => {
    try {
      let list = handleSplitCartIdList(page)
      const data = await getCartItemList({ problemSeq: list })
      setCartItems(data || [])
    } catch {
      setCartItems([])
    }
  }

  useEffect(() => {
    handleGetCartListIds()
  }, [])

  useEffect(() => {
    if (checkedIds.length === 0) return
    handleGetCartList(page)
  }, [page, checkedIds, totalCartIds, totalCartIds.length])

  return (
    <CartUI
      cartReceipt={<CartReceipt checkedIds={checkedIds} cartItems={cartItems} />}
      cartItem={cartItems.map(item => (
        <CartItem
          key={item.id}
          handleRemoveItem={handleRemoveItem}
          handleChecked={handleChecked}
          checkedIds={checkedIds}
          problem={item}
          page={page}
        />
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
