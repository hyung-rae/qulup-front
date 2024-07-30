import { Box, Button, Container, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { IconArrowRight, IconShoppingBag } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import classes from './OrderSection.module.css'
import { productList } from './mock'

const OrderSectionUI = ({ moveToProblemsPage }) => {
  return (
    <Stack justify="center" gap={40} m={'auto'} maw={1400} align="flex-start" id="order" mih={'100vh'}>
      <Box>
        <Title order={1} c="white" fw={700}>
          Order & Purchase
        </Title>
        <Text size="xl" my={30} c="dimmed" fw={700}>
          상품 구매
        </Text>
      </Box>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {productList.map(item => (
          <OrderSectionItemUI {...item} key={item.title} />
        ))}
      </SimpleGrid>

      <Button fullWidth h={50} color="gray.9" rightSection={<IconArrowRight size={20} />} onClick={moveToProblemsPage}>
        구매하기
      </Button>
    </Stack>
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
