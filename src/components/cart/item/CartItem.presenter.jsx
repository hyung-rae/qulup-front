import { Checkbox, CloseButton, Grid, Group, Image, Stack, Text } from '@mantine/core'
import classes from '../Cart.module.css'
const CartItemUI = ({ handleChecked, check, ...props }) => {
  const { id, name, decs, price, discount } = props

  return (
    <Grid.Col span={6}>
      <Group justify="flex-start" bg={'gray.1'} p={10} className={classes.cart_Item_container}>
        <Group gap={10} className={classes.item_img_section}>
          <Checkbox
            size="xs"
            color="dark"
            checked={check}
            onChange={e => handleChecked(id, e.target.checked)}
            className={classes.check_btn}
          />
          <Image
            fit="cover"
            src={null}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            className={classes.item_img}
          />
        </Group>

        <Stack gap={0}>
          <Text className={classes.item_title} lineClamp={1} size="sm" fw={700}>
            {name} /{id}
          </Text>

          <Text className={classes.item_title} lineClamp={1} size="xs">
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
        <CloseButton ml="auto" variant="transparent" size="sm" className={classes.close_btn} />
      </Group>
    </Grid.Col>
  )
}

export default CartItemUI
