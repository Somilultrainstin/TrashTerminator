import React, { useState } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    const send = JSON.stringify({ email: email, password: password });
    //console.log(send);
    const response = await fetch("http://localhost:5000/posts/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: send,
    });
    if (response.status === 200) {
      const res = await response.json();
      sessionStorage.setItem("btoken", res.accessToken);
      sessionStorage.setItem("usertype", "USER");
      history.push("/");
      window.location.reload(false);
      alert("Login Successfull");
    } else {
      //console.log(response);
      alert("Email or Password wrong!!");
    }
  }

  return (
    <div className={classes.body1}>
      <div className={classes.contactForm}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input
            type="text"
            name=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            name=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <input type="checkbox" />{" "}
            <span className={classes.checkboxText}>Remember Me</span>
          </p>
          <input type="submit" name="" value="Sign In" />
        </form>
        <div>
          <p>
            {" "}
            <a href="/register" style={{ color: "skyblue" }}>
              Sign up
            </a>
          </p>
          <p>
            {" "}
            <a href="/loginvendor" style={{ color: "skyblue" }}>
              Login/Sign-Up for Vendors
            </a>
          </p>
          <Row id="footer" className="d-flex justify-content-center mt-5">
            <i
              className="social-icon fab fa-facebook-f"
              style={{ marginRight: 20, color: "#49b7f4" }}
            >
              {" "}
            </i>
            <i
              className="social-icon fab fa-twitter"
              style={{ marginRight: 20, color: "#49b7f4" }}
            >
              {" "}
            </i>
            <i
              className="social-icon fab fa-instagram"
              style={{ marginRight: 20, color: "#49b7f4" }}
            >
              {" "}
            </i>
          </Row>
          <Row className="d-flex justify-content-center mt-2 mb-1">
            <h6 style={{ color: "#49b7f4" }}>
              © Copyright 2022 Trash Terminator
            </h6>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
