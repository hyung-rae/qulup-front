import { Box, Checkbox, Flex, Group, Image, NumberInput, Paper, Text, Title } from '@mantine/core'

const CartItem = () => {
  return (
    <Paper radius={'md'} shadow="lg" p="sm" bg={'white'}>
      <Group align="center" gap={30}>
        <Checkbox defaultChecked size="sm" style={{ alignSelf: 'flex-start' }} />
        <Image
          radius="md"
          w={100}
          h={100}
          fit="fill"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
        />
        <Flex direction={'column'}>
          <Box maw={400}>
            <Title order={4} lineClamp={1}>
              상품 문제 이름
            </Title>
          </Box>
          <Box maw={400}>
            <Title order={6} lineClamp={1}>
              가격
            </Title>
          </Box>
          <Box maw={400}>
            <Title order={6} lineClamp={1}>
              판매 가격
            </Title>
          </Box>
          <NumberInput w={100} step={1} min={0} max={20} defaultValue={1} size="xs" />
        </Flex>
      </Group>
    </Paper>
  )
}

export default CartItem
