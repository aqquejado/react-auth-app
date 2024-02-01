import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  console.log("protected", token)
  return token === "deleted" || !token ? <Navigate to="/login" /> : <Outlet />
}

export default ProtectedRoute;