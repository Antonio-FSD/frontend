import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";

const Movies = (props) => {
  const moviesProp = props.moviesProp;
  return (
    <div id="container">
        <div className="cover">
          <Link to={`/movies/${moviesProp._id}`}>
            <img src={moviesProp.cover} className="movie-cover" alt="" />
          </Link>
        </div>
        <div className="description">
          <p>{moviesProp.title}</p>
        </div>
    </div>
  );
};

export default Movies;
