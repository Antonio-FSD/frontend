import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../Styles/Details.css';

const InfoMovie = () => {
  const [infoMovie, setInfoMovie] = useState([]);

  let { movieId } = useParams();

  const getMovieDetails = async () => {
    const infoMovie = await fetch(`${process.env.REACT_APP_BACKEND}/movies/list/detail/${movieId}`);
    const parseMovieInfo = await infoMovie.json();

    setInfoMovie(parseMovieInfo);

  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line
  }, []);
  
  console.log()
  
  return (
    <div id="info-container">
      <img
        className="movie-cover"
        width={530}
        height={645}
        src={infoMovie.cover}
        alt=""
      />
      <div className="movie-details">
        <p className="title">
          <strong>Título:</strong>{infoMovie.title}
        </p><br/>
        <p>
          <strong>Director:</strong>{infoMovie.director}
        </p><br/>
        <p>
          <strong>Sinopsis:</strong>{infoMovie.synopsis}
        </p><br/>
        <p>
          <strong>Tráiler</strong>
        </p><br/>
        <iframe width="560" 
          height="315" 
          src={infoMovie.trailer} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        />
      </div>
    </div>
  );
  
};
export default InfoMovie;