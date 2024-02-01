import { Link, useNavigate } from "react-router-dom";
import "./LoginStyle.css";
import { useState, useMemo } from "react";
import isEmpty from "lodash/isEmpty";

import LoadingButton from "../../shared/components/button/LoadingButton";
import FormInput from "../../shared/components/input/FormInput";
import Alert from "../../shared/components/alert/Alert";
import { login } from "../../services/Api";
import { checkError } from "../../shared/utils/Error";


const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setErrors({})
    try {
      const data = {
        email,
        password,
      }
      const res = await login(data)
      res.data?.token && sessionStorage.setItem("token", res.data?.token)
      navigate("/dashboard")
    } catch (error) {
      const err = checkError(error)
      setErrors(err.errors ?? err.message)
    } finally {
      setIsLoggingIn(false)
    }
  }

  const FORM_FIELDS = [
    {
      name: "email",
      type: "email",
      value: email,
      onChange: setEmail,
      required: true,
      label: "Email Address",
      placeholder: "janedoe@email.com"
    },
    {
      name: "password",
      type: "password",
      value: password,
      onChange: setPassword,
      required: true,
      label: "Password"
    },
  ]

  const disabledSubmit = useMemo(() => isEmpty(email) || isEmpty(password), [email, password])

  return (
    <div id="container">
      <header>
        <h1 className="mb-3">👋 Hi, welcome back!</h1>
      </header>
      <section>
        {typeof errors === "string" && <Alert content={errors} closable type="danger" onClick={() => setErrors({})}/>}
        <form id="form" onSubmit={handleSubmit}>
          {FORM_FIELDS.map((field, index) => {
            return (
              <FormInput
                key={field.name + index}
                errorMessage={errors[field.name]?.join(" ")}
                {...field}
              />
            )
          })}
          <Link to="/auth/forgot-password" className="link-primary" id="forgotPasswordLink">Forgot your password?</Link>
          <LoadingButton type="submit" loading={isLoggingIn} disabled={disabledSubmit || isLoggingIn} text="Login" id="submit_button" />
          <p className="description">or <Link to="/auth/register" className="link-primary">Don't have an account yet?</Link></p>
        </form>
      </section>
    </div>
  )
}

export default LoginScreen;