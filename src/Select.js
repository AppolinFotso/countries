import React from "react";
import { nanoid } from "nanoid";

function Select(props) {
  const region = props.countryInfo.map((el) => {
    return <option key={nanoid()}> {el.region}</option>;
  });
  return (
    <div className="select">
      <select onChange={(e) => props.select(e.target.value)}>
        <option>Filter by Region</option>
        {region}
      </select>
    </div>
  );
}

export default Select;
