import { redirect } from "react-router-dom"

const homePageLoader = async () => {
  return redirect("/login")
}

export {
  homePageLoader
}