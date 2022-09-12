import React from "react";
import { Link } from "react-router-dom";
import '../../Styles/Movies.css';

const MovieCard = (props) => {
    const movieProp = props.movieProp
    return (
        <li className="movie-card">
            <Link to={`/movies/${movieProp._id}`} >
                <img 
                width={230}
                height={345}
                src={movieProp.cover} 
                className="movie-cover" 
                alt={movieProp.title}/>   
            </Link>
            <div>
                {movieProp.title}
            </div>
        </li>            
    )
}

export default MovieCard;