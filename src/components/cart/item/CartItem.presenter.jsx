import { Checkbox, CloseButton, Grid, Group, Image, Stack, Text } from '@mantine/core'

const CartItemUI = ({ handleChecked, check, ...props }) => {
  const { id, name, decs, price, discount } = props

  return (
    <Grid.Col span={6}>
      <Group justify="flex-start" bg={'gray.1'} p={10} style={{ borderRadius: '4px' }}>
        <Group gap={10}>
          <Checkbox size="xs" color="dark" checked={check} onChange={e => handleChecked(id, e.target.checked)} />
          <Image
            w={50}
            h={50}
            fit="cover"
            src={null}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            style={{ borderRadius: '4px' }}
          />
        </Group>

        <Stack gap={0}>
          <Text w={220} lineClamp={1} size="sm" fw={700}>
            {name} /{id}
          </Text>

          <Text w={220} lineClamp={1} size="xs">
            {decs}
          </Text>
        </Stack>
        <Stack gap={0}>
          <Text fz={12} fw={700} c="dimmed" td={'line-through'}>
            {Number(price).toLocaleString('ko-KR')} 원
          </Text>
          <Text size="sm" fw={700}>
            {Number(price - discount).toLocaleString('ko-KR')} 원
          </Text>
        </Stack>
        <CloseButton ml="auto" variant="transparent" size="sm" style={{ alignSelf: 'flex-start' }} />
      </Group>
    </Grid.Col>
  )
}

export default CartItemUI
