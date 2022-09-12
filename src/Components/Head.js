import React from 'react';
import Browser from './Head/Browser.js';
import ProfileButton from './Head/ProfileButton.js';
import RegisterButton from './Head/RegisterButton.js';
import Genres from './Head/Genres.js';


const Head = ()=> { 
    return (
        <div className="head" >    
            <Genres />
            <Browser />
            <ProfileButton />
            <RegisterButton />
        </div>
    )
}

export default Head;