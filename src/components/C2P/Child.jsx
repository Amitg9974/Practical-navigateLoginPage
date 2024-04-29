import React, { useState } from "react";

function Child({data}) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("value", value);
    data(value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Child;
