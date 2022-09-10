import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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
        <div className="container" >
            {
                moviesList.map((movie) => {
                    return (
                        <div key={movie._id} > 
                            <MovieCard movieProp={movie}/>
                        </div>
                    )
                })
            }
        </div> 
    )

}


export default MoviesList ;