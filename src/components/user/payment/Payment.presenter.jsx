import { Paper, Button, Group, Stack, Table, Text, Tooltip, Pagination } from '@mantine/core'
import classes from './Payment.module.css'
import Link from 'next/link'

const PaymentUI = ({ paymentItemList, open }) => {
  return (
    <Paper>
      <Table.ScrollContainer lin minWidth={600} mih={500} type="native" p={30}>
        <Table className={classes.payment_table}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>결제상품</Table.Th>
              <Table.Th>결제유형</Table.Th>
              <Table.Th>결제금액</Table.Th>
              <Table.Th>결제상태</Table.Th>
              <Table.Th>결제일</Table.Th>
              <Table.Th>영수증</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Stack gap={5}>
                  <Group justify="center">
                    <Text size="sm" fw={700}>
                      {paymentItemList[0].name}
                      {paymentItemList.length > 1 && `외 ${paymentItemList.length} 문제`}
                    </Text>
                    <Button size="compact-xs" color="dark" onClick={open}>
                      상세보기
                    </Button>
                  </Group>
                </Stack>
              </Table.Td>
              <Table.Td>신용카드</Table.Td>
              <Table.Td>72,000 원</Table.Td>
              <Table.Td>결제완료</Table.Td>
              <Table.Td>24.11.02</Table.Td>
              <Table.Td>
                <Link href={'#'}>
                  <Text size="xs">영수증 보기</Text>
                </Link>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <Group justify="center" py={30}>
        <Pagination total={5} color="dark" />
      </Group>
    </Paper>
  )
}

export default PaymentUI
