import logo from "./logo.svg";
import "./App.css";
import EachCountryInfo from "./EachCountryInfo";
import data from "../rest-countries-api-with-color-theme-switcher-master/data.json";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [countryInfo, setCountryInfo] = useState(data);
  const countrydata = countryInfo.map((country) => {
    return (
      <EachCountryInfo
        key={nanoid()}
        flags={country.flags}
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Country Flags</p>
      </header>
      <div className="countries-container">{countrydata}</div>
    </div>
  );
}

export default App;
