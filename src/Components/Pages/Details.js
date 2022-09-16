import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoMovie = () => {
  //Creamos el useState para
  const [infoMovie, setInfoMovie] = useState([]);
  //creamos los hook
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
  
  return (
    
          <div id="infoMovie">
            <section className="section-infoMovie">
              <div className="myImages2">
                <img
                  src={infoMovie.cover}
                  className="tamano"
                  alt=""
                />
              </div>
              <div className="texto">
                <h1>{infoMovie.title} €</h1>
                <p>{infoMovie.director}</p>
                <p>{infoMovie.synopsis}</p>
              </div>
            </section>
          </div>
       
  );
};
export default InfoMovie;