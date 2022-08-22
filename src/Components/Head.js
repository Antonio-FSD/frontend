import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css'


const Header = ()=> {
    
    return (

        <div className="header" >
            <Link to="/" className='ic-logo-web' ></Link> 
        </div>

    )}

export default Header;