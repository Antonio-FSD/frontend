import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../Home/MovieCard";

const Results = () => {
  const [moviesList, setMoviesList] = useState([]);

  const { search } = useLocation();

  const searchParam = new URLSearchParams(search);

  const textResult = searchParam.get("text");

  const getSearch = () => {
    axios
      .get(process.env.REACT_APP_BACKEND + `/movies/search/${textResult}`)

      .then(function(response) {
        console.log("success", response.data);
        setMoviesList(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getSearch();
    // eslint-disable-next-line 
  }, [textResult]);

  return (
    <div className="movies-grid">
        {moviesList.map((movie) => (
            <MovieCard movieProp={movie} key={movie._id}/>
        ))}
    </div> 
  );
};

export default Results;
