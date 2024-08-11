import AboutSection from '@/src/components/home/about-section/AboutSection'
import HeroSection from '@/src/components/home/hero-section/HeroSection'
import HistorySection from '@/src/components/home/history-section/HistorySection'
import NoticeSection from '@/src/components/home/notice-section/NoticeSection'
import OrderSection from '@/src/components/home/order-section/OrderSection.container'
import { Container } from '@mantine/core'

/** 랜딩 페이지 */
const HomePage = () => {
  return (
    <Container fluid p={0} bg="dark">
      <HeroSection />
      <AboutSection />
      <OrderSection />
      <HistorySection />
      <NoticeSection />
    </Container>
  )
}

export default HomePage
