import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (info) => { // info is the country props, how can it works here?
    console.log("object");
    const newVisitedCountries = [...visitedCountries, info] // how the sumation work? 
    setVisitedCountries(newVisitedCountries)
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Country lists: {visitedCountries.length} </h4>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)
            }
        </ul>
      </div>

      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountries ={handleVisitedCountries}
          info={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
