import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // setData("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(data));
    console.log("data", data);
    setData({ fullname: "", phone: "", email: "", password: "", gender: "" });
    navigate('/login');
  };

  return (
    <div>
      <h1>Registraion Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="inputArea">
          Fullname:{" "}
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            value={data.fullname}
            required
          />
        </div>
        <div className="inputArea">
          Phone:{" "}
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={data.phone}
            required
          />
        </div>
        <div className="inputArea">
          Email:{" "}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
        </div>
        <div className="inputArea">
          Password:{" "}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
        </div>
        <div className="inputArea">
          Gender:{" "}
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male{" "}
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female{" "}
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={handleChange}
          />
          Other
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
