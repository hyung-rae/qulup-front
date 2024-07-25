import { Button, Divider, Group, Paper, Stack, Text, Title } from '@mantine/core'

const CartReceiptUI = ({ checkedCount, totalPrice, totalDiscount }) => {
  return (
    <Paper shadow="xs" p="lg">
      <Group mb={20}>
        <Title order={5}>
          선택한
          <Text component="span" c="teal" inherit mx={5}>
            {checkedCount || 0}
          </Text>
          개의 상품
        </Title>
      </Group>
      <Stack gap={10}>
        <Group justify="space-between">
          <Text size="sm" fw={700} c="dimmed">
            상품 금액
          </Text>
          <Text size="sm" fw={700}>
            {Number(totalPrice || 0).toLocaleString('ko-KR')} 원
          </Text>
        </Group>
        <Group justify="space-between">
          <Text size="sm" fw={700} c="dimmed">
            할인 금액
          </Text>
          <Text size="sm" fw={700}>
            {Number(totalDiscount || 0).toLocaleString('ko-KR')} 원
          </Text>
        </Group>
        <Divider my={10} size={'xs'} />
        <Group justify="space-between">
          <Text size="sm" fw={700} c="dimmed">
            결제 금액
          </Text>
          <Text size="sm" fw={700}>
            {Number(totalPrice - totalDiscount || 0).toLocaleString('ko-KR')} 원
          </Text>
        </Group>
        <Button mt={20} fullWidth color="dark">
          결제하기
        </Button>
      </Stack>
    </Paper>
  )
}

export default CartReceiptUI
