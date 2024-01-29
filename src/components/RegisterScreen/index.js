import "./RegisterStyle.css";

const RegisterScreen = () => {
  return (
    <div id="loginContainer">
      <section>
        <h1>Welcome! May I know your...</h1>
        <form id="loginForm">
          <div>
            <label for="fullName">Full Name</label>
            <input type='text' id="fullName" name="fullName" placeholder="Jane Doe"/>
          </div>
          <div>
            <label for="email">Email</label>
            <input type='email' id="email" name="email" placeholder="janedoe@mail.com"/>
          </div>
          <div>
            <label for="password">Password</label>
            <input type='password' id="password" name="password"/>
          </div>
          <input type='submit' value='REGISTER'/>
          <p className="description">or <a href="/login">Login</a></p>
        </form>
      </section>
    </div>
  )
}

export default RegisterScreen;