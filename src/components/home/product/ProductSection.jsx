import { Container, Flex, Title, Image, Group, Button, Box } from '@mantine/core'
import ProductCard from './ProductCard'

const ProductSection = () => {
  return (
    <Container fluid mb={250}>
      <Flex justify={'center'} align={'center'} h={150}>
        <Title order={1} c={'white'}>
          Order & Purchase
        </Title>
      </Flex>
      <Group justify="center" gap={50}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Group>
    </Container>
  )
}

export default ProductSection
