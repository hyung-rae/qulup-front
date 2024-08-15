import React from 'react'
import * as Mantine from '@mantine/core'
import classes from './Cards.module.css'
import { IconBookmark } from '@tabler/icons-react'

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
    isChecked,
    setIsChecked,
    detailModal,
    handleLikeButton,
  } = props

  return (
    <Mantine.Card
      key={`problem_${article.problemSeq}`}
      p="md"
      radius="md"
      className={`${classes.card} ${checkedList.includes(article.problemSeq) ? classes.checked : ''}`}
      onClick={e => {
        handleProblemClick(article.problemSeq)
      }}
    >
      <Mantine.Flex direction={'column'} justify={'space-between'} mb={20} gap={10} miw={250}>
        <Mantine.Group gap={10}>
          {!detailModal && (
            <Mantine.Checkbox color="dark" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
          )}
          <Mantine.Text size="md" fw={700}>
            {article.problemSeq}.
          </Mantine.Text>
          <Mantine.Badge bg={difficultyOption[article?.difficulty]?.color || 'gray'}>
            {difficultyOption[article.difficulty]?.title || '쉬움'}
          </Mantine.Badge>
          <Mantine.ActionIcon
            className={classes.action}
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <IconBookmark
              style={{ width: 16, height: 16 }}
              color={'gold'}
              className={`${heartList.includes(article.problemSeq) && classes.active}`}
              fill={heartList.includes(article.problemSeq) ? 'gold' : ''}
              onClick={() => handleLikeButton(article.problemSeq)}
            />
          </Mantine.ActionIcon>
        </Mantine.Group>
        <Mantine.Group gap={5}>
          {article.tag.split(',').map(tag => (
            <Mantine.Badge color="dark.1" key={tag}>
              {tag}
            </Mantine.Badge>
          ))}
        </Mantine.Group>
      </Mantine.Flex>
      <Mantine.AspectRatio ratio={1680 / 720}>
        <Mantine.Text size="xs" bg={'dark.6'} c={'white'} style={problemCodeStyleProps}>
          {article.code}
        </Mantine.Text>
        <Mantine.Image
          src={article.problemImage}
          radius={4}
          bd={'1px solid #555'}
          onClick={e => {
            e.stopPropagation()
            handleDetailClick(article.problemSeq)
          }}
        />
      </Mantine.AspectRatio>
      <Mantine.Text size="md" tt="uppercase" fw={700} mt="md">
        <span style={{ textDecoration: 'line-through' }}>{article?.price || 10000} 원</span> | {article.dc} 원
      </Mantine.Text>
      <Mantine.Text className={classes.description} mt={5}>
        {article?.description || '문제 설명입니다.'}
      </Mantine.Text>
    </Mantine.Card>
  )
}

export default CardItemUI
