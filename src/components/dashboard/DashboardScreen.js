import { useCallback } from "react";
import "./DashboardStyle.css";
import { useNavigate } from "react-router-dom";

const DashboardScreen = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
    // TODO: logout API
    navigate("/login", {replace: true})
  }, [])
  return (
    <div id="container">
      <header>
        <h1 className="mb-3">HELLO 👋</h1>
      </header>
      <button id="logout_button" className="mt-4 mb-3 btn btn-primary" onClick={handleOnClick}>Goodbye</button>
    </div>
  )
}

export default DashboardScreen;