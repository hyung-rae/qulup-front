import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Pagination,
  SegmentedControl,
  Space,
  Stack,
  Text,
} from '@mantine/core'

import { IconArrowRight, IconClockCheck, IconShoppingBag, IconStar, IconStarFilled } from '@tabler/icons-react'
import GemstoneItem from './item/GemstoneItem.container'

const GemstoneUI = ({ sortType, setSortType, gemstone, page, setPage, open }) => {
  return (
    <Container fluid maw={1500} p={'lg'}>
      <SegmentedControl
        value={sortType}
        onChange={setSortType}
        size="sm"
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
      <Stack>
        <Grid my={20} justify="flex-start">
          {gemstone?.map(item => (
            <GemstoneItem item={item} key={item.id} open={open} />
          ))}
        </Grid>
        <Center mt="auto">
          <Pagination total={3} page={page} onChange={setPage} color="dark" size="sm" />
        </Center>
      </Stack>
    </Container>
  )
}

export default GemstoneUI
