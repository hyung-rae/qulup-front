// ## API TODO: faq, inquiry 보내줄 데이터는 아래와 비슷하게 주시면 됩니다.
import { useState } from 'react'
import { mock } from '@/src/api/cart/useCartApi'

export const FAQ_DEFAULT = [
  {
    id: 1,
    title: 'FAQ 제목1',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 2,
    title: 'FAQ 제목2',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 3,
    title: 'FAQ 제목3',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 4,
    title: 'FAQ 제목4',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 5,
    title: 'FAQ 제목5',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 6,
    title: 'FAQ 제목6',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 7,
    title: 'FAQ 제목7',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 8,
    title: 'FAQ 제목8',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 9,
    title: 'FAQ 제목9',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
  {
    id: 10,
    title: 'FAQ 제목10',
    writer: '관리자',
    created_at: '2024-01-01',
    body: <p>asdasd</p>,
  },
]

export const INQUIRY_DEFAULT = [
  {
    id: 1,
    writer: '김정빈',
    state: 'done',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 2,
    writer: '김정빈',
    state: 'wait',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 3,
    writer: '김정빈',
    state: 'done',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 4,
    writer: '김정빈',
    state: 'wait',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 5,
    writer: '김정빈',
    state: 'done',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 6,
    writer: '김정빈',
    state: 'wait',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 7,
    writer: '김정빈',
    state: 'wait',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 8,
    writer: '김정빈',
    state: 'wait',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 9,
    writer: '김정빈',
    state: 'wait',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
  {
    id: 10,
    writer: '김정빈',
    state: 'wait',
    created_at: '2024-01-01',
    body: <p>1:1문의 입니다.</p>,
    answer: {
      created_at: '2024-02-02',
      body: <p>하하 열심히 해보세요</p>,
    },
  },
]

