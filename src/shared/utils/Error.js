export const checkError = (error) => {
  if (error.name === "AxiosError") {
    return error.response?.data ?? error.response?.message
  }
  return error
}