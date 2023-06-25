import logo from "./logo.svg";
import "./App.css";
import EachCountryInfo from "./EachCountryInfo";
import data from "./data.json";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Search";
import Select from "./Select";

function App() {
  const [countryInfo, setCountryInfo] = useState(data);

  function search(inputValue) {
    if (inputValue === "") {
      setCountryInfo(data);
    } else {
      const newCountryList = countryInfo.filter(
        (el) =>
          el.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          `${el.capital === undefined ? "" : el.capital}`
            .toLowerCase()
            .includes(inputValue.toLowerCase())
      );
      setCountryInfo(newCountryList);
    }
  }
  //
  function select(value) {
    console.log(value);
    const countryByRegion = countryInfo.filter((el) => el.region === value);
    setCountryInfo(countryByRegion);
  }
  //
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
      <div className="sel-search">
        <Search search={search} />
        <Select countryInfo={countryInfo} select={select} />
      </div>
      <div className="countries-container">{countrydata}</div>
    </div>
  );
}

export default App;
