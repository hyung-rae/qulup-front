import React from 'react'
import CardItemUI from './CardItem.presenter'

const CardItem = ({ ...props }) => {
  const { article, checkedList, heartList, handleProblemClick, handleDetailClick, handleHeartClick } = props

  return (
    <CardItemUI
      article={article}
      checkedList={checkedList}
      heartList={heartList}
      handleProblemClick={handleProblemClick}
      handleDetailClick={handleDetailClick}
      handleHeartClick={handleHeartClick}
    />
  )
}

export default CardItem
