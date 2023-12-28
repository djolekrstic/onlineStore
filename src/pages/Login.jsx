import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="align-element login-main">
      <div className="login">
        <div>
          <Link to="/" className="logo">
            online<span>Games</span>
          </Link>
        </div>
        <Form action="/" className="login-form">
          <input
            type="text"
            // name="email"
            id="email"
            placeholder="Phone number, username, or email"
          />
          <input
            type="password"
            // name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Log in</button>
        </Form>
      </div>
      <div className="login-register">
        <p>Don't have an account?</p>
        <Link to="/register">Register</Link>
      </div>
    </main>
  );
};
export default Login;
