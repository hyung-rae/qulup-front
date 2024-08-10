import React from 'react'
import * as Mantine from '@mantine/core'

import classes from './Cards.module.css'
import { IconHeart } from '@tabler/icons-react'

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
  veryEasy: { color: 'gray', title: '매우 쉬움' },
  easy: { color: 'green', title: '쉬움' },
  normal: { color: 'yellow', title: '보통' },
  hard: { color: 'red', title: '어려움' },
  veryHard: { color: 'dark', title: '매우 어려움' },
}

const CardItemUI = ({ ...props }) => {
  const {
    article,
    checkedList,
    heartList,
    handleProblemClick,
    handleDetailClick,
    handleHeartClick,
    isChecked,
    setIsChecked,
    detailModal,
  } = props

  return (
    <Mantine.Card
      key={`problem_${article.id}`}
      p="md"
      radius="md"
      className={`${classes.card} ${checkedList.includes(article.id) ? classes.checked : ''}`}
      onClick={e => {
        handleProblemClick(article.id)
      }}
    >
      <Mantine.Flex justify={'space-between'} mb={20}>
        <Mantine.Group gap={10}>
          {!detailModal && (
            <Mantine.Checkbox color="dark" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
          )}
          <Mantine.Text size="md" fw={700}>
            {article.id}.
          </Mantine.Text>
        </Mantine.Group>
        <Mantine.Group gap={5}>
          {article.tag.map(tag => (
            <Mantine.Badge color="dark.3" key={tag}>
              {tag}
            </Mantine.Badge>
          ))}
          <Mantine.Badge bg={difficultyOption[article.difficulty].color}>
            {difficultyOption[article.difficulty].title}
          </Mantine.Badge>
          <Mantine.ActionIcon
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
          </Mantine.ActionIcon>
        </Mantine.Group>
      </Mantine.Flex>
      <Mantine.AspectRatio ratio={1680 / 720}>
        <Mantine.Text size="xs" bg={'dark.6'} c={'white'} style={problemCodeStyleProps}>
          {article.code}
        </Mantine.Text>
        <Mantine.Image
          src={article.image}
          radius={4}
          bd={'1px solid #555'}
          onClick={e => {
            e.stopPropagation()
            handleDetailClick(article.id)
          }}
        />
      </Mantine.AspectRatio>
      <Mantine.Text size="md" tt="uppercase" fw={700} mt="md">
        {article.price} 원
      </Mantine.Text>
      <Mantine.Text className={classes.description} mt={5}>
        {article.description}
      </Mantine.Text>
    </Mantine.Card>
  )
}

export default CardItemUI
