import React from "react";

function EachCountryInfo(props) {
  return (
    <div>
      <img src={props.flags.png} />
      <p>{props.name}</p>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Capital: {props.capital}</p>
    </div>
  );
}

export default EachCountryInfo;
