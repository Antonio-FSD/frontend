import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
    const movieProp = props.movieProp
    return (
       <div  id="movie-container">
            <section className="movie-card" >
                    <div className="movie-link">
                        <Link to={`/movies/${movieProp._id}`} >
                        <img src={movieProp.cover}  className="miImages" alt=""/>   
                        </Link>
                    </div>
                    <div className="movie-title">
                        <h1>{movieProp.title}</h1>
                    </div>
            </section>
          
        </div>
    )
}

export default MovieCard;