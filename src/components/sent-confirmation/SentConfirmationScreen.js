import { Link } from "react-router-dom";
import "./SentConfirmationStyle.css";

const SentConfirmationScreen = () => {
  return (
    <div id="confirmation_container">
      <header>
        <h1 className="mb-3">✅ Confirm your e-mail</h1>
        <h6>We've sent an email to your email address. Kindly verify your account to be able to login.</h6>
      </header>
      <Link type="button" className="mt-4 mb-3 btn btn-primary" to="/auth/login" role="button">Back to Login</Link>
    </div>
  )
}

export default SentConfirmationScreen;