import React from 'react'
import { Container, SimpleGrid } from '@mantine/core'

const CardsUI = ({ ...props }) => {
  const { cards, col, px, py } = props
  return (
    <Container px={px} py={py} size={1850}>
      <SimpleGrid cols={{ base: 1, sm: col }} style={{ maxWidth: 1800 }}>
        {cards}
      </SimpleGrid>
    </Container>
  )
}

export default CardsUI
