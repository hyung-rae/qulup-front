'use client'

import { useEffect, useState } from 'react'

import { useDisclosure } from '@mantine/hooks'
import DetailModal from './detail/DetailModal.container'
import ServiceUI from './Service.presenter'
import WriteModal from './write/WriteModal.container'

import useInquiryApi from '@/src/api/inquiry/useInquiryApi'
import instance from '@/src/api/instance'
import useServiceApi from '@/src/api/service/useServiceApi'

const Service = ({}) => {
  const [page, setPage] = useState(1)
  const [tabValue, setTabValue] = useState('faq') // faq or inquiry
  const [article, setArticle] = useState(null)
  const [editorHtml, setEditorHtml] = useState('')
  const [searchText, setSearchText] = useState('')
  const [faq_data, setFaqData] = useState([])
  const [inquiry_data, setInquiryData] = useState([])

  const [totalCount, setTotalCount] = useState(56)

  const { postInquiryAdd } = useInquiryApi()
  const { getFAQList, getInqueryList } = useServiceApi()

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

  const handlePostData = async () => {
    try {
      const res = await postInquiryAdd({ content: editorHtml })
      if (res.data.success) {
        alert('문의하기가 완료되었습니다.')
        writingClose()
      }
    } catch {
      alert('문의하기중 문제가 발생했습니다.')
    } finally {
      // 문의하기 완료시, 새로고침
      handleGetBoardData(page)
    }
  }

  const handleSearch = () => {
    console.log(`검색: ${searchText}`)
  }

  const handleGetBoardData = async (page, tabValue) => {
    try {
      if (tabValue === 'faq') {
        const faq = await getFAQList({ page: page })
        setFaqData(faq.list.content)
        setTotalCount(faq.list.totalElements)
      } else {
        const inq = await getInqueryList({ page: page })
        setInquiryData(inq.list.content)
        setTotalCount(inq.list.totalElements)
      }
    } catch {}
  }

  useEffect(() => {
    if (!page || !tabValue) return
    handleGetBoardData(page, tabValue)
  }, [page, tabValue])

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
        page={page}
        setPage={setPage}
        inquiry_data={inquiry_data}
        totalCount={totalCount}
      />
    </>
  )
}

export default Service
