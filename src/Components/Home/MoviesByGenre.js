import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import '../../Styles/Movies.css'


const MoviesByGenre = () =>{

    const [moviesByGenre, setMoviesByGenre] = useState([]);

    let {genreId} = useParams();
  
    const getMoviesByGenre = async () => {
        const moviesByGenre = await fetch(`${process.env.REACT_APP_BACKEND}/movies/list/${genreId}`);
        const parseMoviesByGenre = await moviesByGenre.json();

        setMoviesByGenre(parseMoviesByGenre);
    
    };
    //Preguntar cómo reiniciar valor
    useEffect(() => {
        getMoviesByGenre();
        // eslint-disable-next-line
    }, [] );
      
    return (
        <div className="movies-grid">
            {moviesByGenre.map((movie) => (
                <MovieCard movieProp={movie} key={movie._id}/>
            ))}
        </div> 
    )

}

export default MoviesByGenre;