import { ActionIcon, SimpleGrid, Card, Image, Text, Container, AspectRatio, Flex, Modal, Box } from '@mantine/core'
import classes from './ArticlesCardsGrid.module.css'
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react'

const mockdata = [
  {
    id: 1,
    description: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
  {
    id: 2,
    description: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
  {
    id: 3,
    description: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
  {
    id: 4,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
  {
    id: 5,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
  {
    id: 6,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
  {
    id: 7,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
  {
    id: 8,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
  },
]

const ArticlesCardsGrid = ({ heartList, handleProblemClick, handleDetailClick, handleHeartClick }) => {
  const cards = mockdata.map(article => (
    <Card
      key={`problem_${article.id}`}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
      onClick={() => {
        handleProblemClick(article.id)
      }}
    >
      <Flex justify={'space-between'} mb={20}>
        <Text>{article.id}</Text>
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
            fill={heartList.includes(article.id) ? 'red' : ''}
          />
        </ActionIcon>
      </Flex>
      <AspectRatio ratio={1920 / 1080}>
        <Text
          size="xs"
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 10px',
            height: '25px',
            backgroundColor: '#fff',
            width: 'fit-content',
            textWrap: 'nowrap',
            borderRadius: '4px 0 0 0',
            color: '#000',
          }}
        >
          문제코드
        </Text>
        <Image
          src={article.image}
          radius={4}
          onClick={e => {
            e.stopPropagation()
            handleDetailClick(article.id)
          }}
        />
      </AspectRatio>
      <Text size="xs" tt="uppercase" fw={700} mt="md">
        {article.price} 원
      </Text>
      <Text className={classes.description} mt={5}>
        {article.title}
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
