import React, { useState } from "react";
import "./Login.scss";
import login_logo from "./login_logo.png";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const SignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("Registered", auth);
        if (auth) history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={login_logo} alt="" />
      </Link>

      <div className="log_container">
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
            onChange={(e) => setPassword(e.target.value)}
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
