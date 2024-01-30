import { Link, useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/dashboard");
    e.preventDefault();
  }

  return (
    <div id="loginContainer">
      <header>
        <h1 className="mb-3">👋 Hi, welcome back!</h1>
      </header>
      <section>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label ">Email</label>
            <input type='email' id="email" name="email" placeholder="janedoe@mail.com" className="form-control"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type='password' id="password" name="password" className="form-control" />
          </div>
          <Link to="/register" className="link-primary" id="forgotPasswordLink">Forgot your password?</Link>
          <input type='submit' value='LOGIN' className="mt-4 mb-3 btn"/>
          <p className="description">or <a href="/register" className="link-primary">Don't have an account yet?</a></p>
        </form>
      </section>
    </div>
  )
}

export default LoginScreen;