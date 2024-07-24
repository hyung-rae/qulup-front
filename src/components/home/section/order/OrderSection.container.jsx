import { useRouter } from 'next/router'
import OrderSectionUI from './OrderSection.presenter'

const OrderSection = () => {
  const { push } = useRouter()

  const moveToProblemsPage = () => {
    push('/problems')
  }

  return <OrderSectionUI moveToProblemsPage={moveToProblemsPage} />
}

export default OrderSection
