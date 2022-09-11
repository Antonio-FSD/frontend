import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../../Msc/LoginContext.js';
import axios from 'axios';

const initLogin = {
  nickname: '',
  password: ''
};

function Login () {
    const [loginInfo, setLoginInfo] = useState (initLogin);
    const [isLoggedError, setIsLoggedError] = useState(false);
    const navigate = useNavigate();

    const{setUserProfile} = useContext(LoginContext) 

    const loginUser = (e) => {
      e.preventDefault();  
  
      axios.post(process.env.REACT_APP_BACKEND+'/users/login', loginInfo)

        .then(function (response) {
          console.log("accediendo",response);
          window.localStorage.setItem('token', response.data.token);
          setUserProfile(response.data.profile)
          if(localStorage.token){
            navigate('/profile');
          } else {
            navigate('/');
          }
        })
        .catch(function (error) { 
          console.log('Hola soy el error', isLoggedError);
          console.log(error);
          setIsLoggedError(true);
          setLoginInfo(initLogin);
        });
    }

    return (
      <div className="first-module">
        <div className="login-image-container">
            <img 
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fle-bouquet-cinema-1-logo-png-transparent.png&f=1&nofb=1https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fle-bouquet-cinema-1-logo-png-transparent.png&f=1&nofb=1' 
              alt="Cineplex" 
              width="320" 
              height="250" 
              className="login-image" />
          </div>
        <div className="secondModule">
          <form>
            <input 
              required 
              placeholder="Usuario"
              id="required-user" 
              name="User" 
              type="text"
              value={loginInfo.nickname} 
              onChange={e => setLoginInfo({...loginInfo, nickname:e.target.value })}/><br /><br />
            <input  
              required
              placeholder="Contraseña"
              id="required-pass"
              name="Contraseña"
              type="password"
              value={loginInfo.password}
              onChange={e => setLoginInfo({...loginInfo, password:e.target.value})}/><br /><br />
            <input type="submit" onClick={loginUser} value="Entrar"/><br /><br />
              <Link to="/register">
                Crea tu cuenta para acceder
              </Link>
          </form>
        </div>

         
          {isLoggedError && <p className="l_error">Ha ocurrido un error</p>}

        </div>
  )
};

export default Login; 