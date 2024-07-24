import CartReceiptUI from './CartReceipt.presenter'

const CartReceipt = () => {
  return <CartReceiptUI selectCount={1} totalPrice={1000} totalDiscount={100} />
}

export default CartReceipt
