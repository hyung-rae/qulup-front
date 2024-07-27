import React from 'react'

import CardItem from './CardItem.container'
import CardsUI from './Cards.presenter'

const Cards = ({
  checkedList = [],
  heartList = [],
  handleProblemClick = () => {},
  handleDetailClick = () => {},
  handleHeartClick = () => {},
  col = 4,
  px = '16px',
  py = 'xl',
  data = [],
}) => {
  const cards = data.map(article => (
    <CardItem
      article={article}
      checkedList={checkedList}
      heartList={heartList}
      handleProblemClick={handleProblemClick}
      handleDetailClick={handleDetailClick}
      handleHeartClick={handleHeartClick}
    />
  ))
  return <CardsUI cards={cards} col={col} px={px} py={py} />
}

export default React.memo(Cards)
