import { useState } from 'react'
import {
  UnstyledButton,
  Checkbox,
  Text,
  Image,
  AspectRatio,
  Flex,
  CloseButton,
  Button,
  NumberInput,
} from '@mantine/core'
import classes from './Cart.module.css'

const CartItem = () => {
  const [value, onChange] = useState(true)

  return (
    <div className={classes.button}>
      <Checkbox
        color="dark"
        checked={value}
        onClick={() => onChange(!value)}
        tabIndex={-1}
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
      />

      <AspectRatio ratio={100 / 100} maw={100} mr="md">
        <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png" alt="Panda" />
      </AspectRatio>

      <Flex h={100} direction="column" justify="space-between">
        <div>
          <Text fw={700} mb={7} lh={1}>
            확률과 통계 & 미적분
          </Text>
          <Text fz="sm" c="white">
            모의고사 1세트 (미적분 & 확통) 제작 핵심문항 세트제작
          </Text>
        </div>

        <Text fw={700} fz="md" c="white">
          30,000 원
        </Text>
      </Flex>

      <NumberInput size="xs" min={1} max={100} defaultValue={1} m="auto" style={{ alignSelf: 'center' }} suffix="개" />

      <CloseButton variant="transparent" size="lg" pos="absolute" top={5} right={5} />
    </div>
  )
}

export default CartItem
