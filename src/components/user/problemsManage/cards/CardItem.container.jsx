import React, { useEffect, useState } from 'react'
import CardItemUI from './CardItem.presenter'

const CardItem = ({ ...props }) => {
  const { article, checkedList } = props
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (checkedList.includes(article.id)) setIsChecked(true)
    else setIsChecked(false)
  }, [article.id, setIsChecked, checkedList, checkedList.length])

  return <CardItemUI {...props} isChecked={isChecked} setIsChecked={setIsChecked} />
}

export default CardItem
