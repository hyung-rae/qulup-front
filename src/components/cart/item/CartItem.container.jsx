import CartItemUI from './CartItem.presenter'

const CartItem = ({ id, name, decs, price, discount }) => {
  return <CartItemUI id={id} name={name} decs={decs} price={price} discount={discount} />
}

export default CartItem
