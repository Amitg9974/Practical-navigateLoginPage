import React from "react";

function LoginData() {
  const storedData = JSON.parse(localStorage.getItem("formData"));
  return (
    <div>
      <h1>Login Data</h1>
      <div className="inputForm">
        <h5>Name: {storedData.fullname}</h5>
      </div>
      <div className="inputForm">
        <h5>Phone: {storedData.phone}</h5>
      </div>
      <div className="inputForm">
        <h5>Email: {storedData.email}</h5>
      </div>
      <div className="inputForm">
        <h5>Password: {storedData.password}</h5>
      </div>
      <div className="inputForm">
        <h5>Gender: {storedData.gender}</h5>
      </div>
    </div>
  );
}

export default LoginData;
