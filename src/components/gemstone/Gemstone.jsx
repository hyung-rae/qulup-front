import { Box, Container, Flex, Group, SegmentedControl, Text } from '@mantine/core'
import GemstoneItem from './GemstoneItem'

const Gemstone = () => {
  return (
    <Container bg="gray.3" fluid p="xl" mih={'100vh'}>
      <Flex direction="column" w={1200} m="auto" gap={20}>
        <Group align="flex-start" justify="space-between">
          <Text fz={26} fw={900} variant="gradient" gradient={{ from: 'gray', to: 'dark', deg: 0 }}>
            Math Gemstone
          </Text>
          <SegmentedControl
            size="sm"
            w={300}
            withItemsBorders={false}
            data={['Top', 'New', 'Greatest']}
            mb={20}
            color="dark"
          />
        </Group>
        <GemstoneItem />
        <GemstoneItem />
        <GemstoneItem />
      </Flex>
    </Container>
  )
}

export default Gemstone
