import { Button, Center, Checkbox, Container, Grid, Group, Pagination, Paper, Stack, Text, Title } from '@mantine/core'
import { IconArrowRight, IconShoppingBag } from '@tabler/icons-react'
import Link from 'next/link'

const CartUI = ({ cartReceipt, cartItem, page, setPage, totalCount = 0, checkedIds, handleCheckedAll }) => {
  return (
    <Container fluid maw={1700} p={'lg'}>
      <Grid justify="center" align="flex-start">
        <Grid.Col span={{ base: 12, md: 2 }}>{cartReceipt}</Grid.Col>
        <Grid.Col span="auto">
          <Paper shadow="xs" p="lg">
            <Stack gap={0}>
              <Group>
                <Checkbox
                  size="sm"
                  color="dark"
                  checked={checkedIds.length === totalCount}
                  indeterminate={checkedIds.length > 0 && checkedIds.length !== totalCount}
                  onChange={handleCheckedAll}
                />
                <Title order={4}>전체 선택하기</Title>
                {totalCount > 0 && (
                  <Pagination total={totalCount / 10 + 1} page={page} onChange={setPage} color="dark" ml={'auto'} />
                )}
              </Group>
              <Grid my={20} justify="flex-start">
                {totalCount === 0 && (
                  <Stack justify="center" m="auto" h={250}>
                    <Title order={4} c="dimmed" fw={700}>
                      장바구니에 담긴상품이 없습니다
                    </Title>
                    <Link href={'/problems'}>
                      <Button fullWidth color="gray.9" rightSection={<IconArrowRight size={14} />}>
                        문제 보러가기
                      </Button>
                    </Link>
                  </Stack>
                )}
                {cartItem}
              </Grid>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default CartUI
