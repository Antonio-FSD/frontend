import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Head.css';

const RegisterButton = () => {
    return (
        <Link to={'/register'} className="register-button">Regístrate</Link>
    )
}

export default RegisterButton;