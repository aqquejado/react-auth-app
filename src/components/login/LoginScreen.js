import { Link, useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/dashboard");
    e.preventDefault();
  }

  return (
    <div id="container">
      <header>
        <h1 className="mb-3">👋 Hi, welcome back!</h1>
      </header>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label ">Email</label>
            <input type='email' id="email" name="email" placeholder="janedoe@mail.com" className="form-control"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type='password' id="password" name="password" className="form-control" />
          </div>
          <Link to="/forgot-password" className="link-primary" id="forgotPasswordLink">Forgot your password?</Link>
          <input type="submit" value="Login" className="mt-4 mb-3 btn"/>
          <p className="description">or <a href="/register" className="link-primary">Don't have an account yet?</a></p>
        </form>
      </section>
    </div>
  )
}

export default LoginScreen;