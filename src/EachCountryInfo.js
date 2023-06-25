import React from "react";

function EachCountryInfo(props) {
  return (
    <div className="country-info">
      <img
        src={props.flags.png}
        className="flag-image"
        alt={`${props.name} flag`}
      />
      <h2>{props.name}</h2>
      <p>
        <span>Population:</span> {props.population}
      </p>
      <p>
        <span>Region:</span> {props.region}
      </p>
      <p>
        <span>capital:</span> {props.capital}
      </p>
    </div>
  );
}

export default EachCountryInfo;
