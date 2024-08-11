import React, { useEffect, useState } from 'react'
import CardItemUI from './CardItem.presenter'

const CardItem = ({ ...props }) => {
  const {
    article,
    checkedList,
    heartList,
    handleProblemClick,
    handleDetailClick,
    handleHeartClick,
    detailModal = false,
  } = props
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (checkedList.includes(article.problemSeq)) setIsChecked(true)
    else setIsChecked(false)
  }, [article.problemSeq, setIsChecked, checkedList, checkedList.length])

  return (
    <CardItemUI
      article={article}
      checkedList={checkedList}
      heartList={heartList}
      handleProblemClick={handleProblemClick}
      handleDetailClick={handleDetailClick}
      handleHeartClick={handleHeartClick}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      detailModal={detailModal}
    />
  )
}

export default CardItem
