'use client'

import { useState } from 'react'

import dynamic from 'next/dynamic'

import { useDisclosure } from '@mantine/hooks'
import DetailModal from './detail/DetailModal.container'
import ServiceUI from './Service.presenter'
import WriteModal from './write/WriteModal.container'

const Service = ({ props }) => {
  const [tabValue, setTabValue] = useState('faq') // faq or inquiry
  const [modalTitle, setModalTitle] = useState('타이틀')
  const [editorHtml, setEditorHtml] = useState('')
  const [searchText, setSearchText] = useState('')

  const [detailOpened, { open: detailOpen, close: detailClose }] = useDisclosure(false)
  const [writingOpened, { open: writingOpen, close: writingClose }] = useDisclosure(false)

  const handleFaqClick = row => {
    setModalTitle(row.title)
    detailOpen()
  }
  const handleInquiryClick = row => {
    setModalTitle(row.title)
    detailOpen()
  }

  const handlePostData = () => {
    console.log('editorHtml: ', editorHtml)
  }

  const handleSearch = () => {
    console.log(`검색: ${searchText}`)
  }

  return (
    <>
      {/* 상세글보기 모달 */}
      <DetailModal
        detailOpened={detailOpened}
        detailOpen={detailOpen}
        detailClose={detailClose}
        modalTitle={modalTitle}
        setModalTitle={setModalTitle}
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
      />
    </>
  )
}

export default Service
