import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import '../../Styles/Movies.css';

const MoviesList = () =>{

    const [moviesList, setMoviesList] = useState([]);
 
    const getMoviesList = async () => {
        const moviesList = await fetch(`${process.env.REACT_APP_BACKEND}/movies/list`);
        const parseMoviesList = await moviesList.json();

        setMoviesList(parseMoviesList);
    
    };

    useEffect(() => {
        getMoviesList();
    }, [] );
    
    return (
        <ul className="movies-grid" >
            {moviesList.map((movie) => (
                <MovieCard movieProp={movie} key={movie._id} />
            ))}
        </ul>
    )
}


export default MoviesList ;