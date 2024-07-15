import { Button, Divider, Flex, Group, Paper, Text, Title } from '@mantine/core'
import React from 'react'

const CartReceipt = () => {
  return (
    <Paper radius={'md'} shadow="lg" p="xl" w={350} h={300} bg={'white'} style={{ position: 'sticky', top: 20 }}>
      <Flex direction={'column'} justify={'space-between'} h={'100%'}>
        <Flex direction={'column'} gap={10}>
          <Title order={3} c={'dark'}>
            주문 내역
          </Title>
          <Divider size="sm" />
        </Flex>

        <Flex direction="column" gap={10}>
          <Group justify="space-between">
            <Text fz="md" c="gray.6">
              총 상품 가격
            </Text>
            <Text fz="md" c="gray.6">
              <b>129,000</b> 원
            </Text>
          </Group>

          <Group justify="space-between">
            <Text fz="md" c="gray.6">
              할인 금액
            </Text>
            <Text fz="md" c="gray.6">
              <b>129,000</b> 원
            </Text>
          </Group>

          <Group justify="space-between">
            <Text fz="md" c="gray.6">
              배송비
            </Text>
            <Text fz="md" c="gray.6">
              <b>129,000</b> 원
            </Text>
          </Group>
        </Flex>

        <Button fullWidth size="md">
          구매하기 (2)
        </Button>
      </Flex>
    </Paper>
  )
}

export default CartReceipt
