export const formatDate = date => {
  try {
    const _date = new Date(date)
    // 연도 추출
    const year = _date.getFullYear()

    // 월 추출 (0부터 시작하기 때문에 1을 더해줍니다)
    const month = String(_date.getMonth() + 1).padStart(2, '0')

    // 일 추출
    const day = String(_date.getDate()).padStart(2, '0')

    // 연도/월/일 형식으로 반환
    return `${year}/${month}/${day}`
  } catch {
    return '2024/01/01'
  }
}
