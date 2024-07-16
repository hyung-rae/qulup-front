import { Container } from '@mantine/core'
import Hero from './hero-section/Hero'
import About from './about-section/About'
import OrderSection from './order-section/OrderSection'
import Project from './project-section/Project'
import Notice from './notice-section/Notice'

const Home = () => {
  return (
    <Container fluid p={0} bg="dark">
      <Hero />
      <About />
      <OrderSection />
      <Project />
      <Notice />
    </Container>
  )
}

export default Home
