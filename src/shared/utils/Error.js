export const checkError = (error) => {
  if (error.name === "AxiosError") {
    return error.response.data
  }
  return error
}