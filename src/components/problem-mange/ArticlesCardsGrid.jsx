import React from 'react'
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
import { PROBLEM_DATA } from '@/src/mock-data/dummy'

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
  const cards = PROBLEM_DATA.map(article => (
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
      <AspectRatio ratio={1680 / 720}>
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
      <Container py="xl" size={1850}>
        <SimpleGrid cols={{ base: 1, sm: 4 }} style={{ minWidth: '1800px', maxWidth: '1800px' }}>
          {cards}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default React.memo(ArticlesCardsGrid)
