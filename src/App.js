import React from "react";
import "./App.css";
// import FetchData from './components/DropDownMenu/FetchData';
// import Parent from "./components/C2P/Parent";
// import Todo from "./components/TodoList/Todo";
import Registration from "./components/LoginPage/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import LoginData from "./components/LoginPage/LoginData";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <FetchData /> */}
        {/* <Parent /> */}
        {/* <Todo /> */}
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginData" element={<LoginData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
