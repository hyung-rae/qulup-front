// FormData 생성 함수
export const createFormData = params => {
  const formData = new FormData()
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      formData.append(key, params[key])
    }
  }
  return formData
}
