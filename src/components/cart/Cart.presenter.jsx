import { Checkbox, Container, Grid, Group, Pagination, Paper, Stack, Title } from '@mantine/core'

const CartUI = ({ cartReceipt, cartItem, page, setPage, totalCount, checkedIds, handleCheckedAll }) => {
  return (
    <Container fluid maw={1500} p={'lg'}>
      <Grid justify="center" align="flex-start">
        <Grid.Col span={{ base: 12, sm: 3 }}>{cartReceipt}</Grid.Col>
        <Grid.Col span="auto">
          <Paper shadow="xs" p="lg">
            <Stack mih={'70vh'} gap={0}>
              <Group>
                <Checkbox
                  size="xs"
                  color="dark"
                  checked={checkedIds.length === totalCount}
                  indeterminate={checkedIds.length > 0 && checkedIds.length !== totalCount}
                  onChange={handleCheckedAll}
                />
                <Title order={6}>전체 선택하기 (총 {Number(totalCount).toLocaleString('ko-KR')}개)</Title>
              </Group>
              <Grid my={20} justify="flex-start">
                {cartItem}
              </Grid>
              <Pagination total={totalCount / 10} page={page} onChange={setPage} color="dark" size="sm" mt="auto" />
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default CartUI
