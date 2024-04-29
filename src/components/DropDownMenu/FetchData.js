import { useEffect, useState } from "react";
function FetchData() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const contries = [
    { country: "india", countryCode: "IN", states: ["gujarat", "mumbai"] },
    { country: "pakistan", countryCode: "PAK", states: ["lahore", "karachi"] },
    { country: "usa", countryCode: "US", states: ["california", "newyork"] },
  ];
  return (
    <div className="App">
      <h3>Drop Down</h3>
      <form action="">
        <select
          className="select"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {contries.map((index, id) => (
            <option key={id} value={id}>
              {index.country}
            </option>
          ))}
        </select>
        <select className="select">
          {contries[selectedCountry].states.map((state, index) => (
            <option key={index}>{state}</option>
          ))}
          {/* {contries.map(
            (index, id) =>
              parseInt(selectedCountry) === id &&
              index.states.map((e, i) => <option key={i}>{e}</option>)
          )} */}
        </select>
      </form>
    </div>
  );
}

export default FetchData;
