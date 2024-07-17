import {
  AspectRatio,
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  Group,
  Input,
  Modal,
  NumberInput,
  Radio,
  Table,
  Text,
  Title,
} from '@mantine/core'
import { IconPlus, IconMinus, IconEqual } from '@tabler/icons-react'

const Order = ({ opened, onClose }) => {
  return (
    <Modal.Root opened={opened} onClose={onClose} size="70%">
      <Modal.Overlay />
      <Modal.Content pos="relative">
        <CloseButton size="lg" variant="transparent" c="dark" pos="absolute" top={10} right={10} onClick={onClose} />
        <Modal.Body p="xl">
          {/* 구매자/배송지 */}
          <Group align="flex-start" justify="space-between">
            <div style={{ flex: 1 }}>
              <Divider
                my="md"
                label={
                  <Title order={3} c="teal">
                    구매자 정보
                  </Title>
                }
                labelPosition="left"
              />
              <Table withTableBorder withColumnBorders>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td bg={'dark.6'}>이름</Table.Td>
                    <Table.Td>
                      <Input w={150} size="compact-sm" defaultValue={'홍길동'} />
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td bg={'dark.6'}>휴대폰 번호</Table.Td>
                    <Table.Td>
                      <Input w={150} size="compact-sm" defaultValue={'010-1234-5678'} />
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td bg={'dark.6'}>Email</Table.Td>
                    <Table.Td>
                      <Input w={150} size="compact-sm" defaultValue={'SbI3M@example.com'} />
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </div>

            <div style={{ flex: 1 }}>
              <Divider
                my="md"
                label={
                  <Title order={3} c="teal">
                    배송 정보
                  </Title>
                }
                labelPosition="left"
              />
              <Table withTableBorder withColumnBorders>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td bg={'dark.6'}>수령인</Table.Td>
                    <Table.Td>
                      <Input w={150} size="compact-sm" defaultValue={'홍길동'} />
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td bg={'dark.6'}>수령인 휴대폰 번호</Table.Td>
                    <Table.Td>
                      <Input w={150} size="compact-sm" defaultValue={'010-1234-5678'} />
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td bg={'dark.6'}>배송지</Table.Td>
                    <Table.Td></Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td bg={'dark.6'}>배송메모</Table.Td>
                    <Table.Td></Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </div>
          </Group>

          <Divider
            my="md"
            label={
              <Title order={3} c="teal">
                구매 상품
              </Title>
            }
            labelPosition="left"
          />
          <Flex direction={'column'} gap={10} wrap={'wrap'}>
            <Group align="center">
              <AspectRatio ratio={50 / 50} maw={50} mr="md">
                <img
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
                  alt="Panda"
                />
              </AspectRatio>
              <Flex direction="column" justify="space-between">
                <div>
                  <Text size="sm" fw={700} mb={7} lh={1}>
                    확률과 통계 & 미적분
                  </Text>
                  <Text fz="xs" c="dimmed">
                    모의고사 1세트 (미적분 & 확통) 제작 핵심문항 세트제작
                  </Text>
                </div>

                <Text size="sm" fw={700} c="dark">
                  30,000 원
                </Text>
              </Flex>
            </Group>
            <Group align="center">
              <AspectRatio ratio={50 / 50} maw={50} mr="md">
                <img
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
                  alt="Panda"
                />
              </AspectRatio>
              <Flex direction="column" justify="space-between">
                <div>
                  <Text size="sm" fw={700} mb={7} lh={1}>
                    확률과 통계 & 미적분
                  </Text>
                  <Text fz="xs" c="dimmed">
                    모의고사 1세트 (미적분 & 확통) 제작 핵심문항 세트제작
                  </Text>
                </div>

                <Text size="sm" fw={700} c="dark">
                  30,000 원
                </Text>
              </Flex>
            </Group>
          </Flex>

          {/* 결제  */}
          <Group align="flex-start" justify="space-between">
            <div style={{ flex: 1 }}>
              <Divider
                my="md"
                label={
                  <Title order={3} c="teal">
                    결제 정보
                  </Title>
                }
                labelPosition="left"
              />
              <Flex direction="column" gap={10} px="md">
                <Group justify="space-between">
                  <Text fw={700} size="sm">
                    총 상품가격
                  </Text>
                  <Text fw={700} size="sm">
                    5,000 원
                  </Text>
                </Group>

                <Group justify="space-between">
                  <Text fw={700} size="sm">
                    총 배송비
                  </Text>
                  <Group gap={5}>
                    <IconPlus size={14} />
                    <Text fw={700} size="sm">
                      5,000 원
                    </Text>
                  </Group>
                </Group>

                <Group justify="space-between">
                  <Text fw={700} size="sm">
                    할인금액
                  </Text>
                  <Group gap={5}>
                    <IconMinus size={14} />
                    <Text fw={700} size="sm">
                      5,000 원
                    </Text>
                  </Group>
                </Group>

                <Group justify="space-between">
                  <Text fw={700} size="sm">
                    포인트
                  </Text>
                  <Group gap={5}>
                    <IconMinus size={14} />
                    <NumberInput w={100} size="compact-sm" hideControls suffix="p" defaultValue={0} />
                  </Group>
                </Group>

                <Group justify="space-between">
                  <Title order={4}>결제금액</Title>
                  <Title order={4} c="teal">
                    5,000 원
                  </Title>
                </Group>
              </Flex>
            </div>
            <div style={{ flex: 1 }}>
              <Divider
                my="md"
                label={
                  <Title order={3} c="teal">
                    결제 수단
                  </Title>
                }
                labelPosition="left"
              />
              <Radio.Group name="favoriteFramework">
                <Group mt="xs" justify="space-between">
                  <Radio color="teal" value="account" label="계좌이체" />
                  <Radio color="teal" value="card" label="신용카드" />
                  <Radio color="teal" value="virtualAccount" label="가상계좌" />
                  <Radio color="teal" value="phone" label="휴대폰" />
                </Group>
              </Radio.Group>
              <Button size="md" fullWidth color="teal" mt={90}>
                결제하기
              </Button>
            </div>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default Order
