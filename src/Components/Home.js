import React from 'react';
import MoviesList from './Home/MoviesList';

const Home = ()=> {
    return(
        <div className="home">
            <div className="welcome">
                <span className="main-msg">Bienvenido a tu cine de confianza</span><br />
                <span className="sub-main-msg">Selecciona una película para ver sus detalles, horario y seleccionar tu asiento</span>            
            </div>
            <div className="movies-list">
                <MoviesList />
            </div> 
        </div>
    )
}
export default Home;