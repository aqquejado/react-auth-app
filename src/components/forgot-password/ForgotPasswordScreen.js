import { Link, useNavigate } from "react-router-dom";
import "./ForgotPasswordStyle.css";
import { useState } from "react";
import FormInput from "../../shared/components/input/FormInput";
import { forgotPassword } from "../../services/Api";
import { checkError } from "../../shared/utils/Error";
import LoadingButton from "../../shared/components/button/LoadingButton";
import { isEmpty } from "lodash";
import Alert from "../../shared/components/alert/Alert";

const ForgotPasswordScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setErrors({})
    try {
      const res = await forgotPassword(email)
      setMessage(res.data.message ?? "Success")
    } catch (error) {
      const err = checkError(error)
      setErrors(err.errors ?? err.message)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div id="container">
      <header>
        <h1>🔒 Forgot your password?</h1>
        <h3>Input your email address below so we could help you</h3>
      </header>
      <section>
        {!isEmpty(message) && <Alert content={errors} closable type="success" onClick={() => setMessage("")}/>}
        {typeof errors === "string" && <Alert content={errors} closable type="danger" onClick={() => setErrors({})}/>}
        <form id="form" onSubmit={handleSubmit}>
          <FormInput
            errorMessage={errors["email"]}
            label="Email Address"
            name="email"
            onChange={setEmail}
            type="email"
            required
            value={email}
            placeholder="janedoe@email.com"
          />
          <LoadingButton type="submit" loading={isSending} disabled={isEmpty(email) || isSending} id="submit_button" />
          <Link to="/login" className="btn btn-secondary" role="button">Cancel</Link>
        </form>
      </section>
    </div>
  )
}

export default ForgotPasswordScreen;