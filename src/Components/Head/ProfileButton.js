import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../Msc/LoginContext.js';
import '../../Styles/Head.css';

const ProfileButton = () => {

    const{userProfile} = useContext(LoginContext);

    return userProfile && userProfile.nickname ? 
    <Link to={'/profile'} className="profile-button">{userProfile.name}</Link> : 
    <Link to={'/login'} className="profile-button">Inicia sesión</Link>

}

export default ProfileButton;