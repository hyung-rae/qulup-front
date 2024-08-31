import { Badge, Button, Card, Flex, Group, Image, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconArrowRight, IconShoppingBag } from '@tabler/icons-react'
import classes from './ExamProblems.module.css'
import ExamProblemsModal from './ExamProblemsModal'

const ExamProblemsItem = ({ article }) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleClickAddCart = problemSeqList => {
    // TODO: problemSeqList 등 리스트를 로컬스토리지에 넣기

    localStorage.setItem('problemList', problemSeqList)
    if (confirm('장바구니에 상품이 담겼습니다.\n장바구니 페이지로 이동하시겠습니까?')) {
      router.push('/cart')
    }
  }

  return (
    <>
      {/* 상세 모달 */}
      <ExamProblemsModal opened={opened} onClose={close} />
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
              onClick={() => handleClickAddCart(article.problemSeq)}
            >
              장바구니에 담기
            </Button>
          </Flex>
        </Group>
      </Card>
    </>
  )
}

export default ExamProblemsItem
