import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  return token === "deleted" || !token ? <Navigate to="/auth/login" /> : <Outlet />
}

export default ProtectedRoute;