import React, { useEffect, useState } from "react";
import "./todo.css";

function Todo() {
  const [list, setList] = useState("");
  const [newList, setNewList] = useState([]);

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleClick = (e) => {
    // e.preventDefault();
    if (list.trim() !== "") {
      setNewList([...newList, list]);
      setList("");
    }
  };

  const enterButton = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleRemove = (e) => {
    const remove = newList.filter((data, i) => i !== e);
    setNewList(remove);
  };

  const handleEdit = (e) => {};

  useEffect(() => {
    console.log("newList", newList);
  }, [newList]);

  return (
    <div className="main">
      <div className="inputForm">
        <input
          type="text"
          value={list}
          onChange={handleChange}
          onKeyPress={enterButton}
        />
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </div>
      {/* <div> */}
      {newList.map((data, index) => (
        <div className="list" key={index}>
          <p>{data}</p>
          <span>
            <p onClick={() => handleRemove(index)}>Remove</p>
            <p onClick={() => handleEdit(index)}>Edit</p>
          </span>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}

export default Todo;
