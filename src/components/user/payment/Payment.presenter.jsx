import { Box, Button, Table, Text } from '@mantine/core'

const PaymentUI = () => {
  return (
    <Box>
      <Table.ScrollContainer minWidth={600} h={'80vh'} type="native" p={30}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>주문번호</Table.Th>
              <Table.Th>결제유형</Table.Th>
              <Table.Th>결제금액</Table.Th>
              <Table.Th>결제상태</Table.Th>
              <Table.Th>결제일</Table.Th>
              <Table.Th>환불신청</Table.Th>
              <Table.Th>영수증</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>241234-2402012</Table.Td>
              <Table.Td>신용카드</Table.Td>
              <Table.Td>30,000 원</Table.Td>
              <Table.Td>결제완료</Table.Td>
              <Table.Td>24.11.02</Table.Td>
              <Table.Td>
                <Button fullWidth size="compact-xs" color="dark">
                  신청
                </Button>
              </Table.Td>
              <Table.Td>
                <Text size="xs" component="a" td={'underline'}>
                  영수증 보기
                </Text>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>241234-2402012</Table.Td>
              <Table.Td>신용카드</Table.Td>
              <Table.Td>30,000 원</Table.Td>
              <Table.Td>결제완료</Table.Td>
              <Table.Td>24.11.02</Table.Td>
              <Table.Td>
                <Button fullWidth size="compact-xs" color="dark">
                  신청
                </Button>
              </Table.Td>
              <Table.Td>
                <Text size="xs" component="a" td={'underline'}>
                  영수증 보기
                </Text>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Box>
  )
}

export default PaymentUI
