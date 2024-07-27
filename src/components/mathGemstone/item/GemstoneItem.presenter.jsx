import { Badge, Box, Button, Flex, Grid, Image, Space, Stack, Text } from '@mantine/core'
import { IconArrowRight, IconShoppingBag, IconStar, IconStarFilled } from '@tabler/icons-react'

const GemstoneItemUI = ({ item, isLiked, setIsLiked, matches, open, moveToOrderPage }) => {
  return (
    <Grid.Col span={matches ? 6 : 12} key={item.id}>
      <Flex
        direction={matches ? 'row' : 'column'}
        justify={matches ? 'flex-start' : 'center'}
        align={'center'}
        bg={'gray.1'}
        p={10}
        gap={40}
      >
        <Box pos={'relative'}>
          {item.status === 'wait' && (
            <Badge size="sm" color="gray" pos={'absolute'} top={0} left={0}>
              대기중
            </Badge>
          )}
          {item.status === 'process' && (
            <Badge size="sm" color="blue" pos={'absolute'} top={0} left={0}>
              해설 작업중
            </Badge>
          )}
          {item.status === 'complete' && (
            <Badge size="sm" color="teal" pos={'absolute'} top={0} left={0}>
              해설완료
            </Badge>
          )}
          <Image
            w={matches ? 200 : 300}
            h={matches ? 100 : 200}
            fit="cover"
            src={null}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </Box>

        <Stack w={'100%'} gap={0} maw={260} justify="space-between" style={{ cursor: 'pointer' }} onClick={open}>
          <Text lineClamp={1} size="sm" fw={700}>
            {item.name}
          </Text>

          <Text lineClamp={1} size="xs">
            {item.decs}
          </Text>
          <Space h="sm" />
          <Text fz={12} fw={700} c="dimmed">
            {item.date}
          </Text>
          <Text size="sm" fw={700}>
            {item.write}
          </Text>
        </Stack>

        <Stack ml={matches ? 'auto' : 0} p="sm" gap={10} w={150}>
          <Button
            size="sm"
            leftSection={isLiked ? <IconStarFilled size={14} fill="gold" /> : <IconStar size={14} />}
            variant="transparent"
            onClick={() => setIsLiked(!isLiked)}
          >
            {item.like}
          </Button>
          {item.status === 'complete' && (
            <Button
              size="sm"
              color="dark"
              leftSection={<IconShoppingBag size={14} />}
              rightSection={<IconArrowRight size={14} />}
              onClick={moveToOrderPage}
            >
              구매하기
            </Button>
          )}
        </Stack>
      </Flex>
    </Grid.Col>
  )
}

export default GemstoneItemUI
