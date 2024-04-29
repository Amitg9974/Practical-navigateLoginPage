import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const storedData = JSON.parse(localStorage.getItem("formData"));
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", storedData);
    console.log("loginData", loginData);
    if (
      storedData.email === loginData.email &&
      storedData.password === loginData.password
    ) {
      console.log("your data is matched");
      navigate("/loginData");
    } else {
      console.log("Not match!!");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="inputArea">
          Email:{" "}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={loginData.email}
            required
          />
        </div>
        <div className="inputArea">
          Password:{" "}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={loginData.password}
            required
          />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
