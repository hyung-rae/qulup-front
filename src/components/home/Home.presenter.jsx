import { Container } from '@mantine/core'
import Hero from './section/hero/Hero.container'
import About from './section/about/About.container'
import OrderSection from './section/order/OrderSection.container'
import History from './section/history/History.container'
import Notice from './section/notice/Notice.container'
import Project from './section/project/Project.container'

const HomeUI = () => {
  return (
    <Container fluid p={0} bg="dark">
      <Hero />
      <About />
      <OrderSection />
      {/* <Project /> */}
      <History />
      <Notice />
    </Container>
  )
}

export default HomeUI
