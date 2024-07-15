import { useState } from 'react'
import {
  Container,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  rem,
  Box,
  Flex,
  Title,
  Paper,
} from '@mantine/core'

import { data } from './dummy'
import CartReceipt from './CartReceipt'
import CartItem from './CartItem'

const Cart = () => {
  const [selection, setSelection] = useState(['1'])
  const toggleRow = id =>
    setSelection(current => (current.includes(id) ? current.filter(item => item !== id) : [...current, id]))
  const toggleAll = () => setSelection(current => (current.length === data.length ? [] : data.map(item => item.id)))

  return (
    <Container fluid mih={'100vh'} bg={'gray.1'} p={'lg'}>
      <Group w={'100%'} h={'100%'} gap={50} align="flex-start" maw={'1200px'} mx={'auto'}>
        <Flex direction={'column'} gap={30} style={{ flex: 1 }}>
          {/* 장바구니 리스트 */}
          {new Array(3).fill(1).map((_, i) => (
            <CartItem key={i} />
          ))}
        </Flex>
        {/* 영수증 */}
        <CartReceipt />
      </Group>
    </Container>
  )
}

export default Cart
