import { Button, Flex, Group, Image, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import classes from './OrderSection.module.css'

const OrderSection = () => {
  return (
    <Flex direction="column" align="center" maw={800} m="auto" mt={140} gap={50}>
      <Title fz={40} c="white">
        Order and Purchase
      </Title>

      <Group justify="space-between" w={'100%'}>
        <Flex direction="column" align="center" gap={10}>
          <Title order={5} c="white">
            난이도 A
          </Title>
          <Image radius="md" w={200} h={200} src={'https://cdn.imweb.me/thumbnail/20240310/8c1d94afae0fa.jpg'} />
        </Flex>
        <Flex direction="column" align="center" gap={10}>
          <Title order={5} c="white">
            난이도 B
          </Title>
          <Image radius="md" w={200} h={200} src={'https://cdn.imweb.me/thumbnail/20240310/3010ee7957042.jpg'} />
        </Flex>
        <Flex direction="column" align="center" gap={10}>
          <Title order={5} c="white">
            난이도 C
          </Title>
          <Image radius="md" w={200} h={200} src={'https://cdn.imweb.me/thumbnail/20240310/92304bbea9b77.jpg'} />
        </Flex>
      </Group>

      <Button
        size="lg"
        justify="center"
        fullWidth
        rightSection={<IconArrowRight size={20} />}
        leftSection={<span />}
        variant="subtle"
        radius={'lg'}
      >
        구매하러 가기
      </Button>
    </Flex>
  )
}

export default OrderSection
