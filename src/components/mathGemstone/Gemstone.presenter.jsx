import { Center, Container, Grid, Group, Pagination, SegmentedControl, Stack, Text } from '@mantine/core'

import { IconClockCheck, IconStarFilled } from '@tabler/icons-react'
import GemstoneItem from './item/GemstoneItem.container'

const GemstoneUI = ({ sortType, setSortType, gemstone, page, setPage, open }) => {
  return (
    <Container fluid maw={1700} p={'xl'}>
      <Group align="flex-start" justify="space-between">
        <Text fz={26} fw={900} variant="gradient" gradient={{ from: 'gray', to: 'dark', deg: 0 }}>
          Math Gemstone
        </Text>
        <SegmentedControl
          value={sortType}
          onChange={setSortType}
          size="md"
          w={300}
          withItemsBorders={false}
          data={[
            {
              value: 'new',
              label: (
                <Center style={{ gap: 10 }}>
                  <IconClockCheck style={{ width: 16, height: 16 }} />
                  <span>New</span>
                </Center>
              ),
            },
            {
              value: 'greatest',
              label: (
                <Center style={{ gap: 10 }}>
                  <IconStarFilled fill="gold" style={{ width: 16, height: 16 }} />
                  <span>Greatest</span>
                </Center>
              ),
            },
          ]}
          mb={20}
          color="dark"
        />
      </Group>
      <Stack>
        <Grid my={20} justify="flex-start">
          {gemstone?.map(item => (
            <GemstoneItem item={item} key={item.id} open={open} />
          ))}
        </Grid>
        <Center mt="auto">
          <Pagination total={3} page={page} onChange={setPage} color="dark" />
        </Center>
      </Stack>
    </Container>
  )
}

export default GemstoneUI
