import { useMemo, useState } from "react";
import "./RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { registerUser } from "../../services/Api";
import { checkError } from "../../shared/utils/Error";
import LoadingButton from "../../shared/components/button/LoadingButton";
import FormInput from "../../shared/components/input/FormInput";
import Alert from "../../shared/components/alert/Alert";


const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsRegistering(true)
    setErrors({})
    try {
      const data = {
        name: fullName,
        email,
        password,
        password_confirmation: confirmPassword,
        consent
      }
      await registerUser(data)
      navigate("/register/confirm")
    } catch (error) {
      const err = checkError(error)
      setErrors(err.errors ?? err.message)
    } finally {
      setIsRegistering(false)
    }
  }

  const disabledSubmit = useMemo(() => isEmpty(fullName) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword) || !consent, [fullName, email, password, confirmPassword, consent])
  
  const FORM_FIELDS = [
    {
      name: "fullName",
      type: "text",
      value: fullName,
      onChange: setFullName,
      required: true,
      label: "Full Name"
    },
    {
      name: "email",
      type: "email",
      value: email,
      onChange: setEmail,
      required: true,
      label: "Email Address"
    },
    {
      name: "password",
      type: "password",
      value: password,
      onChange: setPassword,
      required: true,
      label: "Password"
    },
    {
      name: "password_confirmation",
      type: "password",
      value: confirmPassword,
      onChange: setConfirmPassword,
      required: true,
      label: "Confirm Password"
    },
    {
      name: "consent",
      type: "checkbox",
      value: consent,
      onChange: setConsent,
      required: true,
      label: <>I agree with the <a href="#" className="link-primary">Personal data processing policy</a></>
    },
  ]
  return (
    <div id="container">
      <header>
        <h1>Welcome!</h1>
        <h3>🤔 May I know your...</h3>
      </header>
      <section>
        {typeof errors === "string" && <Alert content={errors} closable type="danger" onClick={() => setErrors({})}/>}
        <form id="form" onSubmit={handleSubmit}>
          {FORM_FIELDS.map((field, index) => {
            return (
              <FormInput
                key={field.name + index}
                errorMessage={errors[field.name]}
                {...field}
              />
            )
          })}
          <LoadingButton type="submit" loading={isRegistering} disabled={disabledSubmit || isRegistering} text="Register" id="submit_button" />
          <Link to="/login" className="btn btn-secondary" role="button">Login</Link>
        </form>
      </section>
    </div>
  )
}

export default RegisterScreen;