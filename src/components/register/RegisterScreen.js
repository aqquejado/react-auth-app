import { useEffect, useMemo, useState } from "react";
import "./RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { registerUser } from "../../services/Api";
import { checkError } from "../../shared/utils/Error";


const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  console.log(Object.keys(errors).length, errors)
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
      const res = await registerUser(data)
      console.log(res)
    } catch (error) {
      const err = checkError(error)
      if (err.errors) setErrors(err.errors)
    } finally {
      setIsRegistering(false)
    }
  }

  const disabledSubmit = useMemo(() => isEmpty(fullName) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword) || !consent, [fullName, email, password, confirmPassword, consent])
  
  return (
    <div id="container">
      <header>
        <h1>Welcome!</h1>
        <h3 className="mb-3">🤔 May I know your...</h3>
      </header>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" onChange={(e) => setFullName(e.currentTarget.value)} id="fullName" name="fullName" placeholder="Jane Doe" className={`form-control ${errors.name && "is-invalid"}`} required value={fullName}/>
            <div className="invalid-feedback">{errors.name}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} id="email" name="email" placeholder="janedoe@mail.com" className={`form-control ${errors.email && "is-invalid"}`} required/>
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} id="password" name="password" className={`form-control ${errors.password && "is-invalid"}`} required/>
            <div className="invalid-feedback">{errors.password}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" onChange={(e) => setConfirmPassword(e.currentTarget.value)} id="confirmPassword" name="password_confirmation" className={`form-control ${errors.password_confirmation && "is-invalid"}`} required />
            <div className="invalid-feedback">{errors.password_confirmation}</div>
          </div>
          <div className="form-check">
            <input type="checkbox" id="consent" name="consent" className={`form-check-input ${errors.password_confirmation && "is-invalid"}`} checked={consent} onChange={(e) => setConsent(e.currentTarget.checked)} />
            <label htmlFor="consent" className="form-check-label">I agree with the <a href="#" className="link-primary">Personal data processing policy</a></label>
            <div className="invalid-feedback">{errors.consent}</div>
          </div>
          <button class="btn btn-primary mb-3 mt-5 " type="submit" disabled={disabledSubmit || isRegistering}>
            {isRegistering && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
            Register
          </button>
          <Link to="/login" className="btn btn-secondary" role="button">Login</Link>
        </form>
      </section>
    </div>
  )
}

export default RegisterScreen;