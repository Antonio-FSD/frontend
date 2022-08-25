import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Head.css";

const Browser = () => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="browser">
      <input id="browser" type="search" placeholder="Buscar película" onChange={handleChange} />
      <Link to={`/search?text=${searchField}`} className="browser-button">
        Buscar
      </Link>
    </div>
  );
};

export default Browser;
