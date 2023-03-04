import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/weatherPage/${city}`);
    } else {
      alert("Location Cannot Be......");
    }
  };

  return (
    <div id="search">
      <h1 className="heading">Weather Api</h1>
      <input
        className="searchbx"
        type="text"
        placeholder="Location"
        value={city}
        onChange={handleInputChange}
      /><br></br>
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
