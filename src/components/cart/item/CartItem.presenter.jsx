import { Checkbox, CloseButton, Grid, Group, Image, Stack, Text } from '@mantine/core'
import classes from '../Cart.module.css'
const PLACEHOLDER_IMAGE_SRC = 'https://placehold.co/600x400?text=Placeholder'
const CartItemUI = ({ handleChecked, handleRemoveItem, check, problem }) => {
  return (
    <Grid.Col span={6}>
      <Group justify="flex-start" bg={'gray.1'} p={10} className={classes.cart_Item_container}>
        <Group gap={10} className={classes.item_img_section}>
          <Checkbox
            size="xs"
            color="dark"
            checked={check}
            onChange={e => handleChecked(problem.problemSeq, e.target.checked)}
            className={classes.check_btn}
          />
          <Image fit="cover" src={null} fallbackSrc={problem.problemImage} className={classes.item_img} />
        </Group>

        <Stack gap={0}>
          <Text className={classes.item_title} lineClamp={1} size="sm" fw={700}>
            {problem.problemSeq}. {problem.chapterKr}
          </Text>

          <Text className={classes.item_title} lineClamp={1} size="xs">
            {problem.tag}
          </Text>
        </Stack>
        <Stack gap={0}>
          <Text fz={12} fw={700} c="dimmed" td={'line-through'}>
            {Number(problem.originalPrice).toLocaleString('ko-KR')} 원
          </Text>
          <Text size="sm" fw={700}>
            {Number(problem.calculatedPrice).toLocaleString('ko-KR')} 원
          </Text>
        </Stack>
        <CloseButton
          ml="auto"
          variant="transparent"
          size="sm"
          className={classes.close_btn}
          onClick={() => handleRemoveItem(problem.problemSeq)}
        />
      </Group>
    </Grid.Col>
  )
}

export default CartItemUI
