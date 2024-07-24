import { Box, Button, Container, Group, Image, SimpleGrid, Text, Title } from '@mantine/core'
import { IconArrowRight, IconShoppingBag } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import classes from './OrderSection.module.css'
import { productList } from './mock'

const OrderSectionUI = ({ moveToProblemsPage }) => {
  return (
    <Container my={150} size="lg">
      <Group w={'100%'} maw={1000} justify="space-between" m={'auto'} mb={50}>
        <Title order={1} c="white" fw={700}>
          Order & Purchase
        </Title>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50} maw={1000} m={'auto'}>
        {productList.map(item => (
          <OrderSectionItemUI {...item} key={item.title} />
        ))}
      </SimpleGrid>

      <Group maw={1000} m={'auto'}>
        <Button
          fullWidth
          color="gray.9"
          mt={50}
          rightSection={<IconArrowRight size={14} />}
          onClick={moveToProblemsPage}
        >
          구매하기
        </Button>
      </Group>
    </Container>
  )
}

export default OrderSectionUI

const OrderSectionItemUI = ({ title, description, src, ...props }) => {
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
