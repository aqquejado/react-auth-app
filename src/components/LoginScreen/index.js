import "./LoginStyle.css";

const LoginScreen = () => {
  return (
    <div id="loginContainer">
      <section>
        <h1>Hi, welcome back!</h1>
        <form id="loginForm">
          <div>
            <label for="email">Email</label>
            <input type='email' id="email" name="email" placeholder="janedoe@mail.com"/>
          </div>
          <div>
            <label for="password">Password</label>
            <input type='password' id="password" name="password" />
          </div>
          <input type='submit' value='LOGIN'/>
          <p className="description"><a href="/register">Don't have an account yet?</a></p>
        </form>
      </section>
    </div>
  )
}

export default LoginScreen;