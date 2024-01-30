import { useMemo, useState } from "react";
import "./RegisterStyle.css";
import { Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }

  const disabledSubmit = useMemo(() => isEmpty(fullName) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword), [fullName, email, password, confirmPassword])
  
  return (
    <div id="register_container">
      <header>
        <h1>Welcome!</h1>
        <h3 className="mb-3">🤔 May I know your...</h3>
      </header>
      <section>
        <form id="register_form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" onChange={(e) => setFullName(e.currentTarget.value)} id="fullName" name="fullName" placeholder="Jane Doe" className="form-control" required value={fullName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} id="email" name="email" placeholder="janedoe@mail.com" className="form-control" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} id="password" name="password" className="form-control" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" onChange={(e) => setConfirmPassword(e.currentTarget.value)} id="confirmPassword" name="confirmPassword" className="form-control" required />
          </div>
          <div className="form-check">
            <input type="checkbox" id="consent" name="consent" className="form-check-input" />
            <label htmlFor="consent" className="form-check-label">I agree with the <a href="#" className="link-primary">Personal data processing policy</a></label>
          </div>
          <input type="submit" value="Register" className="mb-3 mt-5 btn" disabled={disabledSubmit}/>
          <Link to="/login" className="btn btn-secondary" role="button">Login</Link>
        </form>
      </section>
    </div>
  )
}

export default RegisterScreen;