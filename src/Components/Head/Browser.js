import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Browser.css";

const Browser = () => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="Browser">
      <input
        className="Browser"
        type="search"
        placeholder="Buscar producto"
        onChange={handleChange}
      ></input>
      <Link to={`/search?text=${searchField}`} className="Button">Buscar</Link>
    </div>
  );
};

export default Browser;
