import React from 'react';
import Categories from './Head/Categories.js';
import Browser from './Head/Browser.js';
import ProfileButton from './Head/ProfileButton.js';
import RegisterButton from './Head/RegisterButton.js';


const Head = ()=> { 
    return (
        <div className="head" >    
            <Categories />
            <Browser />
            <ProfileButton />
            <RegisterButton />
        </div>
    )
}

export default Head;