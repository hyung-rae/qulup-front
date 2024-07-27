import { Button, Container, Divider, Group, Input, Paper, Radio, Select, Stack, Text, Title } from '@mantine/core'

const OrderUI = ({ orderItems, price, discount, payMethod, setPayMethod }) => {
  return (
    <Container p={'xl'}>
      <Paper maw={600} p={40} m={'auto'} bg={'white'}>
        <Stack gap={0}>
          <Divider mb="lg" label={<Title order={4}>구매자 정보</Title>} labelPosition="left" />
          <Input.Wrapper maw={380}>
            <Input size="xs" variant="filled" placeholder="이름" />
          </Input.Wrapper>
          <Input.Wrapper maw={380} mt={20}>
            <Input size="xs" variant="filled" placeholder="이메일" />
          </Input.Wrapper>
          <Input.Wrapper maw={380} mt={20}>
            <Input size="xs" variant="filled" placeholder="휴대폰 번호" />
          </Input.Wrapper>
          <Divider
            my="lg"
            label={
              <Title order={4}>
                상품 정보{' '}
                <Text fz={'sm'} component="span" c="teal" inherit>
                  ({orderItems.length.toLocaleString('ko-KR')} 건)
                </Text>
              </Title>
            }
            labelPosition="left"
          />
          <Stack gap={5}>
            {orderItems.map(item => (
              <Group key={item.id} justify="space-between" wrap="wrap" p={3}>
                <Title order={6}>{item.name}</Title>
                <Title order={6}>{Number(item.price).toLocaleString('ko-KR')} 원</Title>
              </Group>
            ))}
          </Stack>
          <Divider my="lg" label={<Title order={4}>결제 금액</Title>} labelPosition="left" />
          <Stack>
            <Group justify="space-between">
              <Text size="xs" fw={700} c="dimmed">
                상품 금액
              </Text>
              <Text size="xs" fw={700} c="dimmed">
                {Number(price || 0).toLocaleString('ko-KR')} 원
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="xs" fw={700} c="dimmed">
                할인 금액
              </Text>
              <Text size="xs" fw={700} c="dimmed">
                {Number(discount || 0).toLocaleString('ko-KR')} 원
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" fw={700}>
                결제 금액
              </Text>
              <Text size="sm" fw={700}>
                {Number(price - discount || 0).toLocaleString('ko-KR')} 원
              </Text>
            </Group>
          </Stack>

          <Divider my="lg" label={<Title order={4}>결제 수단</Title>} labelPosition="left" />
          <Stack>
            <Radio.Group name="payMethod" value={payMethod} onChange={setPayMethod}>
              <Group>
                <Radio color="dark" size="xs" value="card" label="신용카드" />
                <Radio color="dark" size="xs" value="deposit" label="무통장 입금" />
              </Group>
            </Radio.Group>
            {payMethod === 'deposit' && (
              <Group gap={20}>
                <Select
                  size="xs"
                  variant="filled"
                  checkIconPosition="left"
                  data={['신한은행', '우리은행', '농협은행', '국민은행']}
                  placeholder="입금은행"
                  defaultValue="신한은행"
                  maw={100}
                />
                <Input.Wrapper w={260}>
                  <Input size="xs" variant="filled" placeholder="계좌번호" />
                </Input.Wrapper>
              </Group>
            )}
          </Stack>

          <Button color="dark" mt={30}>
            <Title order={5} c={'white'}>
              결제하기
            </Title>
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default OrderUI
