import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [value, setValue] = useState();
  const getValue = (d) => {
    setValue(d);
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div
        style={{
          height: "50px",
          width: "90px",
          border: "1px solid",
          background: value,
        }}
      ></div>
      <Child data={getValue} />
    </div>
  );
}

export default Parent;
