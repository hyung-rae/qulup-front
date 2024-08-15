'use client'

import { useEffect, useState } from 'react'

import { useDisclosure } from '@mantine/hooks'
import DetailModal from './detail/DetailModal.container'
import ServiceUI from './Service.presenter'
import WriteModal from './write/WriteModal.container'

import { FAQ_DEFAULT, INQUIRY_DEFAULT } from './mock'

const Service = ({}) => {
  const [tabValue, setTabValue] = useState('faq') // faq or inquiry
  const [article, setArticle] = useState(null)
  const [editorHtml, setEditorHtml] = useState('')
  const [searchText, setSearchText] = useState('')
  const [faq_data, setFaqData] = useState([])
  const [inquiry_data, setInquiryData] = useState([])

  const [totalCount, setTotalCount] = useState(56)

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)
  const [writingOpened, { open: writingOpen, close: writingClose }] = useDisclosure(false)

  const handleFaqClick = row => {
    setArticle(row)
    detailOpen()
  }
  const handleInquiryClick = row => {
    setArticle(row)
    detailOpen()
  }

  const handlePostData = () => {
    console.log('editorHtml: ', editorHtml)
  }

  const handleSearch = () => {
    console.log(`검색: ${searchText}`)
  }

  const handleGetBoardData = async page => {
    if (tabValue === 'faq') {
      setFaqData(FAQ_DEFAULT)
    } else {
      setInquiryData(INQUIRY_DEFAULT)
    }
  }

  useEffect(() => {
    // 최초 진입시, faq의 1페이지 10개 데이터 불러오기
    handleGetBoardData({ type: tabValue, page: 1, count: 10 })
  }, [tabValue])

  return (
    <>
      {/* 상세글보기 모달 */}
      <DetailModal
        detailOpened={detailOpened}
        detailOpen={detailOpen}
        detailClose={detailClose}
        article={article}
        setArticle={setArticle}
      />
      {/* 글쓰기 모달 */}
      <WriteModal
        editorHtml={editorHtml}
        setEditorHtml={setEditorHtml}
        handlePostData={handlePostData}
        writingOpened={writingOpened}
        writingOpen={writingOpen}
        writingClose={writingClose}
      />
      <ServiceUI
        tabValue={tabValue}
        setTabValue={setTabValue}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleFaqClick={handleFaqClick}
        handleInquiryClick={handleInquiryClick}
        writingOpen={writingOpen}
        faq_data={faq_data}
        inquiry_data={inquiry_data}
        totalCount={totalCount}
        handleGetBoardData={handleGetBoardData}
      />
    </>
  )
}

export default Service
