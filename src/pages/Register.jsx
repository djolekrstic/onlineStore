import { Form, Link } from "react-router-dom";

const Register = () => {
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
            placeholder="Mobile Number or Email"
          />
          <input
            type="text"
            // name="email"
            id="full_name"
            placeholder="Full Name"
          />
          <input
            type="text"
            // name="email"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            // name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
        </Form>
      </div>
      <div className="login-register">
        <p>Have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </main>
  );
};
export default Register;
