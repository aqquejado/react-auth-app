import { Link, useNavigate } from "react-router-dom";
import "./ForgotPasswordStyle.css";

const ForgotPasswordScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/dashboard");
    e.preventDefault();
  }

  return (
    <div id="container">
      <header className="mb-3">
        <h1>🔒 Forgot your password?</h1>
        <h3>Input your email address below so we could help you</h3>
      </header>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label ">Email</label>
            <input type='email' id="email" name="email" placeholder="janedoe@mail.com" className="form-control"/>
          </div>
          <input type="submit" value="Submit" className="mt-4 mb-3 btn"/>
          <Link to="/login" className="btn btn-secondary" role="button">Cancel</Link>
        </form>
      </section>
    </div>
  )
}

export default ForgotPasswordScreen;