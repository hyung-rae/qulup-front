import {
  ActionIcon,
  Badge,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Flex,
  Group,
  Box,
} from '@mantine/core'
import classes from './ArticlesCardsGrid.module.css'
import { IconHeart } from '@tabler/icons-react'

const mockdata = [
  {
    id: 1,
    description: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'easy',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 2,
    description: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 3,
    description: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'hard',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 4,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 5,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 6,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 7,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 8,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
]
const problemCodeStyleProps = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 10px',
  height: '25px',
  backgroundColor: '#fff',
  width: 'fit-content',
  textWrap: 'nowrap',
  borderRadius: '3px 0 3px 0',
  border: '1px solid #555',
  color: '#000',
}

const difficultyOption = {
  easy: { color: 'green', title: '쉬움' },
  normal: { color: 'yellow', title: '보통' },
  hard: { color: 'red', title: '어려움' },
}

const ArticlesCardsGrid = ({ checkedList, heartList, handleProblemClick, handleDetailClick, handleHeartClick }) => {
  const cards = mockdata.map(article => (
    <Card
      key={`problem_${article.id}`}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={`${classes.card} ${checkedList.includes(article.id) ? classes.checked : ''}`}
      onClick={() => {
        handleProblemClick(article.id)
      }}
    >
      <Flex justify={'space-between'} mb={20}>
        <Box>
          <Text size="md">문제번호: {article.id}</Text>
        </Box>
        <Group gap={5}>
          {article.tag.map(tag => (
            <Badge color="dark.3" key={tag}>
              {tag}
            </Badge>
          ))}
          <Badge bg={difficultyOption[article.difficulty].color}>{difficultyOption[article.difficulty].title}</Badge>
          <ActionIcon
            className={classes.action}
            onClick={e => {
              e.stopPropagation()
              handleHeartClick(article.id)
            }}
          >
            <IconHeart
              style={{ width: 16, height: 16 }}
              color={'red'}
              className={`${heartList.includes(article.id) && classes.active}`}
              fill={heartList.includes(article.id) ? 'red' : ''}
            />
          </ActionIcon>
        </Group>
      </Flex>
      <AspectRatio ratio={1920 / 1080}>
        <Text size="xs" bg={'dark.6'} c={'white'} style={problemCodeStyleProps}>
          {article.code}
        </Text>
        <Image
          src={article.image}
          radius={4}
          bd={'1px solid #555'}
          onClick={e => {
            e.stopPropagation()
            handleDetailClick(article.id)
          }}
        />
      </AspectRatio>
      <Text size="md" tt="uppercase" fw={700} mt="md">
        {article.price} 원
      </Text>
      <Text className={classes.description} mt={5}>
        {article.description}
      </Text>
    </Card>
  ))

  return (
    <>
      <Container py="xl" size={1920}>
        <SimpleGrid cols={{ base: 1, sm: 4 }}>{cards}</SimpleGrid>
      </Container>
    </>
  )
}

export default ArticlesCardsGrid
