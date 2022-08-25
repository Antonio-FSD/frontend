import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../Msc/LoginContext.js';
import '../../Styles/Head.css';

const ProfileButton = () => {

    const{userProfile} = useContext(LoginContext);
    console.log('Hola soy el boton este es userprofile', userProfile);

    return userProfile && userProfile.nickName ? 
    <Link to={'/profile'} className="profile-button">{userProfile.nickName}</Link> : 
    <Link to={'/login'} className="profile-button">Inicia sesión</Link>

}

export default ProfileButton;