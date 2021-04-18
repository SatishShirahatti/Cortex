import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const login = (evt:any) => {
     history.push("/cilents");
  }

  return (
    <>
      <h2>Login Form</h2>
      <form method="post">
        <div className="imgcontainer">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div className="container">
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input
             type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" onClick={login}>
            Login
          </button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <Link to="#">password?</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
