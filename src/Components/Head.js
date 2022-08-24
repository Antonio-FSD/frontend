import React from 'react';
import Browser from './Head/Browser.js';
import Categories from './Head/Categories.js';
import Login from './Head/Categories.js';
import Register from './Head/Register.js';

const Head = ()=> {
    
    return (

        <div className="head" >
            <Categories />
            <Browser />
            <Login />
            <Register />
        </div>

    )}

export default Head;