import { useNavigate, useSearchParams } from "react-router-dom";
import "./ResetPasswordStyle.css";
import { useMemo, useState } from "react";
import FormInput from "../../shared/components/input/FormInput";
import LoadingButton from "../../shared/components/button/LoadingButton";
import isEmpty from "lodash/isEmpty";
import { checkError } from "../../shared/utils/Error";
import { resetPassword } from "../../services/Api";
import Alert from "../../shared/components/alert/Alert";

const ResetPasswordScreen = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const [errors, setErrors] = useState({});
  const token = params.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsResetting(true)
    setErrors({})
    try {
      const data = {
        email,
        password,
        password_confirmation: confirmPassword,
        token
      }
      await resetPassword(data)
      navigate("/auth/login")
    } catch (error) {
      const err = checkError(error)
      setErrors(err.errors ?? err.message)
    } finally {
      setIsResetting(false)
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
    {
      name: "password_confirmation",
      type: "password",
      value: confirmPassword,
      onChange: setConfirmPassword,
      required: true,
      label: "Confirm Password"
    },
  ]

  const disabledSubmit = useMemo(() => isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword), [email, password, confirmPassword])

  return (
    <div id="container">
      <header className="mb-3">
        <h1>Reset your Password</h1>
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
          <LoadingButton type="submit" loading={isResetting} disabled={disabledSubmit || isResetting} id="submit_button" />
        </form>
      </section>
    </div>
  )
}

export default ResetPasswordScreen;