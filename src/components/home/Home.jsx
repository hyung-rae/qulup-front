import { Container } from '@mantine/core'
import HeroSection from './hero/HeroSection'
import ProductSection from './product/ProductSection'
import AboutSection from './about/AboutSection'

const Home = () => {
  return (
    <Container fluid p={0}>
      <HeroSection />
      <AboutSection />
      <ProductSection />
    </Container>
  )
}

export default Home
