import { Badge, Button, Card, Flex, Group, Image, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconArrowRight, IconShoppingBag } from '@tabler/icons-react'
import classes from './ExamProblems.module.css'
import GemstoneModal from './ExamProblemsModal'

const GemstoneItem = ({ article }) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      {/* 상세 모달 */}
      <GemstoneModal opened={opened} onClose={close} />
      <Card withBorder radius="md" p={0} className={classes.card}>
        <Group wrap="nowrap" gap={0}>
          <Image src={article.image} height={160} />
          <div className={classes.body} onClick={open}>
            <Group>
              <Badge color="blue">{article.state}</Badge>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                {article.title}
              </Text>
            </Group>

            <Text className={classes.title} mt="xs" mb="md">
              {article.description}
            </Text>

            <Text size="md">{article.price} 원</Text>
          </div>
          <Flex direction="column" ml="auto" p="lg" gap={20}>
            <Button
              size="sm"
              color="dark"
              leftSection={<IconShoppingBag size={14} />}
              rightSection={<IconArrowRight size={14} />}
              onClick={() => alert('장바구니')}
            >
              장바구니에 담기
            </Button>
          </Flex>
        </Group>
      </Card>
    </>
  )
}

export default GemstoneItem
