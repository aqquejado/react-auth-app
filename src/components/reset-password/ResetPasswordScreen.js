import { useNavigate, useSearchParams } from "react-router-dom";
import "./ResetPasswordStyle.css";

const ResetPasswordScreen = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div>
      <header className="mb-3">
        <h1>Reset your Password</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label ">Email</label>
            <input type='email' id="email" name="email" placeholder="janedoe@mail.com" className="form-control"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input type="password" id="password_confirmation" name="password" className="form-control" />
          </div>
          <input type="submit" value="Submit" className="mt-4 mb-3 btn"/>
        </form>
      </section>
    </div>
  )
}

export default ResetPasswordScreen;