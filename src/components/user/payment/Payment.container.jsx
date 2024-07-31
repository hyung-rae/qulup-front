import { useDisclosure } from '@mantine/hooks'
import PaymentUI from './Payment.presenter'
import { paymentItemList } from './mock'
import PaymentItemDialog from './PaymentItemDialog'

const Payment = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <PaymentItemDialog opened={opened} onClose={close} paymentItemList={paymentItemList} />
      <PaymentUI paymentItemList={paymentItemList} open={open} />
    </>
  )
}

export default Payment
