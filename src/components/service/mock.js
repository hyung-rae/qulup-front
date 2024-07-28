// ## API TODO: faq, inquiry 보내줄 데이터는 아래와 비슷하게 주시면 됩니다.

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

export const RECOMMEND_DATA = [
  {
    id: 1,
    description: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'easy',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 2,
    description: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 3,
    description: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'hard',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 4,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 5,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 6,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
]
export const PROBLEM_DATA = [
  {
    id: 1,
    description: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'easy',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 2,
    description: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 3,
    description: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'hard',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 4,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 5,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 6,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 7,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 8,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 9,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 10,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 11,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 12,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 13,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 14,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 15,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
  {
    id: 16,
    description: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: 58000,
    difficulty: 'normal',
    tag: ['#태그1', '#태그2'],
    code: 'C0Q1X',
  },
]
