// export const ACADEMY_FILTER = [
//   { value: '대성', label: '대성' },
//   { value: '청솔', label: '청솔' },
//   { value: '혁훈', label: '혁훈' },
//   { value: '정빈', label: '정빈' },
// ]

export const ACADEMY_FILTER = [
  {
    group: '대성',
    items: [
      { value: '0', label: '강남' },
      { value: '1', label: '부산' },
      { value: '2', label: '인천' },
    ],
  },
  {
    group: '청솔',
    items: [
      { value: '3', label: '평촌' },
      { value: '4', label: '강남' },
    ],
  },
  {
    group: '퀄업',
    items: [
      { value: '5', label: '양재' },
      { value: '6', label: '도곡' },
    ],
  },
  {
    group: '기타',
    items: [
      { value: '7', label: '어쩌고' },
      { value: '8', label: '저쩌고' },
    ],
  },
]
export const PROBLEM_FILTER = [
  {
    group: '수1',
    items: [
      { value: '0', label: '지수함수와 로그함수' },
      { value: '1', label: '삼각함수' },
      { value: '2', label: '수열' },
    ],
  },
  {
    group: '수2',
    items: [
      { value: '3', label: '함수의 극한과 연속' },
      { value: '4', label: '미분' },
      { value: '5', label: '적분' },
    ],
  },
  {
    group: '미적분',
    items: [
      { value: '6', label: '수열의 극한' },
      { value: '7', label: '미분법' },
      { value: '8', label: '적분법' },
    ],
  },
]

export const SEARCH_FILTER = [
  { value: 'all', label: '전체' },
  { value: 'name', label: '문제명' },
  { value: 'code', label: '코드' },
]
