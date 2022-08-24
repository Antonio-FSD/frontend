import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Banner.css'


const Banner = ()=> {
    
    return (

        <div className="banner" >
            <Link to="/" className='home-logo' ></Link>
            <h1>Nuclio Cineplex</h1>
            <h5>Tu cine más cutre</h5>
        </div>

    )}

export default Banner;