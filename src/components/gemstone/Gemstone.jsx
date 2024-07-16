import { Box, Container, Flex, Group, SegmentedControl, Title } from '@mantine/core'
import GemstoneItem from './GemstoneItem'

const Gemstone = () => {
  return (
    <Container bg="gray.3" fluid p="xl" mih={'100vh'}>
      <Flex direction="column" w={1200} m="auto" gap={20}>
        <Group align="flex-start" justify="space-between">
          <Title>Math Gemstone</Title>
          <SegmentedControl w={300} withItemsBorders={false} data={['Top', 'New', 'Greatest']} mb={20} />
        </Group>
        <GemstoneItem />
        <GemstoneItem />
        <GemstoneItem />
      </Flex>
    </Container>
  )
}

export default Gemstone
