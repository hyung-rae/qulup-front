import { Box, Button, Checkbox, Container, Divider, Flex, Group, Paper, Text, Title } from '@mantine/core'
import { IconPlus, IconMinus, IconEqual } from '@tabler/icons-react'
import CartItem from './CartItem'
import { useDisclosure } from '@mantine/hooks'
import Order from '../order/Order'

const Cart = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <Container bg="dark.9" fluid mih={'100vh'} p="xl">
      {/* 주문서 모달 */}
      <Order opened={opened} onClose={close} />
      <Paper maw={1000} m="auto" shadow="xs" withBorder p="xl">
        <Box>
          <Divider
            my="xs"
            label={
              <Group>
                <Checkbox defaultChecked indeterminate color="dark" />
                <Title order={4}>총 5개의 상품</Title>
                <Button size="sm" color="dark" onClick={open}>
                  구매하기
                </Button>
              </Group>
            }
            labelPosition="left"
          />
          <Group p="xl" justify="center" gap={30}>
            <Flex direction="column" align="center">
              <Text fw={700}>선택상품금액</Text>
              <Text>
                <Text component="span" fw={700} c="dark.1" mr={5}>
                  5,000
                </Text>
                원
              </Text>
            </Flex>
            <IconPlus size={20} color="gray" />
            <Flex direction="column" align="center">
              <Text fw={700}>총 배송비</Text>
              <Text>
                <Text component="span" fw={700} c="dark.1" mr={5}>
                  3,000
                </Text>
                원
              </Text>
            </Flex>
            <IconMinus size={20} color="red" />
            <Flex direction="column" align="center">
              <Text fw={700}>할인금액</Text>
              <Text>
                <Text component="span" fw={700} c="red" mr={5}>
                  1,000
                </Text>
                원
              </Text>
            </Flex>
            <IconEqual size={20} color="gray" />
            <Title order={3} c="teal">
              7,000 원
            </Title>
          </Group>
        </Box>

        <Flex direction="column">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Flex>
      </Paper>
    </Container>
  )
}

export default Cart
