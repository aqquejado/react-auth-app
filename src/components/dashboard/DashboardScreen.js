import { useCallback, useEffect, useState } from "react";
import "./DashboardStyle.css";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../../services/Api";
import { checkError } from "../../shared/utils/Error";
import LoadingButton from "../../shared/components/button/LoadingButton";

const DashboardScreen = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      const res = await getUser()
      console.log(res.data)
    } catch (error) {
      const err = checkError(error)
      console.log(err)
    }
  }, [])

  useEffect(() => {
    // NOTE: test auth
    fetchUser();
  }, [])

  const handleOnClick = useCallback(async () => {
    setIsLoggingOut(true)
    try {
      await logout()
      navigate("/login", {replace: true})
    } catch (error) {
      const err = checkError(error)
      console.log(err)
    } finally {
      setIsLoggingOut(false)
    }
  }, [])
  return (
    <div id="container">
      <header>
        <h1 className="mb-3">HELLO 👋</h1>
      </header>
      <LoadingButton loading={isLoggingOut} id="logout_button" disabled={isLoggingOut} text="Goodbye" onClick={handleOnClick} />
    </div>
  )
}

export default DashboardScreen;