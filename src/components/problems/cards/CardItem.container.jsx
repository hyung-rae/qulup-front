import React, { useEffect, useState } from 'react'
import CardItemUI from './CardItem.presenter'
import useProblemApi from '@/src/api/problem/useProblemApi'

const CardItem = ({ ...props }) => {
  const { article, checkedList } = props
  const [isChecked, setIsChecked] = useState(false)

  const { postLike } = useProblemApi()

  const handleLikeButton = async id => {
    await postLike(id)
  }
  useEffect(() => {
    if (checkedList.includes(article.problemSeq)) setIsChecked(true)
    else setIsChecked(false)
  }, [article.problemSeq, setIsChecked, checkedList, checkedList.length])

  return <CardItemUI {...props} isChecked={isChecked} setIsChecked={setIsChecked} handleLikeButton={handleLikeButton} />
}

export default CardItem
