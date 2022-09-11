import React from 'react';
import MoviesList from './Home/MoviesList';
import '../Styles/Home.css';

const Home = ()=> {
    return(
        <div className="home">
            <div className="welcome">
                <h1 className="main-msg">Bienvenido a tu cine de confianza</h1><br />
                <h5 className="sub-main-msg">Selecciona una película para ver sus detalles, horario y seleccionar tu asiento</h5>            
            </div>
            <div className="movies-list">
                <MoviesList />
            </div> 
        </div>
    )
}
export default Home;