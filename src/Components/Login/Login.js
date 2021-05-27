import React, { useState } from "react";
import "./Login.scss";
import login_logo from "./login_logo.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
  };
  const SignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={login_logo} alt="" />
      </Link>

      <div className="container">
        <h1>Sign In </h1>
        <form>
          <h5> Email </h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5> Password </h5>
          <input
            type="password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" onClick={SignIn} className="signin">
          {" "}
          Sign In{" "}
        </button>

        <p>If you don't have an account, create one</p>
        <button onClick={SignUp} className="signup">
          {" "}
          Sign Up{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
