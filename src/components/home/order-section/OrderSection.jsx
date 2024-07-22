import { Box, Button, Container, Group, Image, SimpleGrid, Text, Title } from '@mantine/core'
import { IconArrowRight, IconShoppingBag } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import classes from './OrderSection.module.css'
import { productList } from './product-mock'

const Item = ({ title, description, src, ...props }) => {
  return (
    <div className={classes.feature} {...props}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Box className={classes.img_section}>
          <Image src={src} />
        </Box>
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  )
}

const OrderSection = () => {
  const { push } = useRouter()

  const items = productList.map(item => <Item {...item} key={item.title} />)

  return (
    <Container my={100} size="lg">
      <Group w={'100%'} maw={1000} justify="flex-start" m={'auto'}>
        <Title order={1} c="white" fw={700}>
          Order & Purchase
        </Title>
        <Button size="sm" color="gray.9" rightSection={<IconArrowRight size={14} />} onClick={() => push('/problems')}>
          구매하기
        </Button>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50} maw={1000} m={'auto'}>
        {items}
      </SimpleGrid>
    </Container>
  )
}

export default OrderSection
