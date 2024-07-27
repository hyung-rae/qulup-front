import { Card, Image, Avatar, Text, Group, Flex, Button, Badge, ActionIcon } from '@mantine/core'
import classes from './ExamProblems.module.css'
import { IconShoppingBag, IconArrowRight, IconStar, IconStarFilled, IconShoppingCart } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import GemstoneModal from './ExamProblemsModal'
import { useState } from 'react'

const GemstoneItem = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      {/* 상세 모달 */}
      <GemstoneModal opened={opened} onClose={close} />
      <Card withBorder radius="md" p={0} className={classes.card}>
        <Group wrap="nowrap" gap={0}>
          <Image
            src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            height={160}
          />
          <div className={classes.body} onClick={open}>
            <Group>
              <Badge color="blue">해설완료</Badge>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                technology
              </Text>
            </Group>

            <Text className={classes.title} mt="xs" mb="md">
              The best laptop for Frontend engineers in 2022
            </Text>
            <Group wrap="nowrap" gap="xs">
              <Group gap="xs" wrap="nowrap">
                <Avatar
                  size={20}
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                />
                <Text size="xs">Elsa Typechecker</Text>
              </Group>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
            </Group>
          </div>
          <Flex direction="column" ml="auto" p="lg" gap={20}>
            <Button
              size="sm"
              leftSection={isLiked ? <IconStarFilled size={14} fill="gold" /> : <IconStar size={14} />}
              variant="default"
              onClick={() => setIsLiked(!isLiked)}
            >
              1,239
            </Button>
            <Group gap={5}>
              <Button
                size="sm"
                color="dark"
                leftSection={<IconShoppingBag size={14} />}
                rightSection={<IconArrowRight size={14} />}
                onClick={() => alert('구매모달 연동')}
              >
                구매하기
              </Button>
              <ActionIcon color="gray.8" size="lg" variant="light">
                <IconShoppingCart style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Flex>
        </Group>
      </Card>
    </>
  )
}

export default GemstoneItem
