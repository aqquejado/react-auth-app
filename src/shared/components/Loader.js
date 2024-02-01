import { redirect } from "react-router-dom"

const homePageLoader = async () => {
  return redirect("/auth/login")
}

const authLoader = async () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  return token === "deleted" || !token ? null : redirect("/dashboard")
}

export {
  homePageLoader,
  authLoader
}