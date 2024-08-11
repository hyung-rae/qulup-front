import { Center, Container, Grid, Group, Pagination, SegmentedControl, Stack } from '@mantine/core'
import { IconClockCheck, IconStarFilled } from '@tabler/icons-react'
import GemstoneItem from './item/GemstoneItem.container'

const GemstoneUI = ({ sortType, setSortType, gemstone, page, setPage, open }) => {
  return (
    <Container fluid maw={1700} p={'xl'}>
      <Group align="center" justify="space-between">
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
          color="dark"
        />

        <Pagination total={3} page={page} onChange={setPage} color="dark" />
      </Group>
      <Stack>
        <Grid my={20} justify="flex-start">
          {gemstone?.map(item => (
            <GemstoneItem item={item} key={item.id} open={open} />
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default GemstoneUI
