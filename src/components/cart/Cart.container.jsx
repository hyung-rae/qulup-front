import CartUI from './Cart.presenter'
import CartItem from './item/CartItem.container'
import { cartItemList } from './mock'
import CartReceipt from './receipt/CartReceipt.container'

const Cart = () => {
  return (
    <CartUI
      cartReceipt={<CartReceipt />}
      cartItem={cartItemList.slice(0, 3).map(item => (
        <CartItem key={item.id} {...item} />
      ))}
    />
  )
}

export default Cart
