import React, { useState }from 'react';
import axios from 'axios'; 

const initRegister = {
  name: '',
  surname: '',
  nickname: '',
  email: '',
  password: ''
};

function Register() {  
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [isCreatedError, setIsCreatedError] = useState(false);
    const [registerInfo, setRegisterInfo] = useState (initRegister);
    const createUser = (e) => {
        e.preventDefault();

        axios.post(process.env.REACT_APP_BACKEND+'/users/register', registerInfo)

          .then(function (response) {
            console.log('success', response);
            setIsUserCreated(true);
            setRegisterInfo(initRegister);
        })
          .catch(function (error) {
            console.log(error);
            setIsCreatedError(true);
            setRegisterInfo(initRegister);
          });
    }

    return (
        <div className = "firstModule">
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
              placeholder="Nombre"
              id="required-name" 
              name="Nombre" 
              type="text"
              value={registerInfo.name} 
              onChange={e => setRegisterInfo({...registerInfo, name:e.target.value })}/><br /><br />
            <input 
              required 
              placeholder="Apellido"
              id="required-user" 
              name="User" 
              type="text"
              value={registerInfo.surname} 
              onChange={e => setRegisterInfo({...registerInfo, surname:e.target.value })}/><br /><br />
            <input 
              required 
              placeholder="Usuario"
              id="required-user" 
              name="User" 
              type="text"
              value={registerInfo.nickname} 
              onChange={e => setRegisterInfo({...registerInfo, nickname:e.target.value })}/><br /><br />
            <input  
              required 
              placeholder="Correo"
              id="required-mail" 
              name="Email" 
              type="email" 
              value={registerInfo.email} 
              onChange={e => setRegisterInfo({...registerInfo, email:e.target.value })}/><br /><br />
            <input  
              required
              placeholder="Contraseña"
              id="required-pass"
              name="Contraseña"
              type="password"
              value={registerInfo.password}
              onChange={e => setRegisterInfo({...registerInfo, password:e.target.value})}/><br /><br />
            <input type="submit" onClick={createUser} value="Registrate"/><br /><br />
            </form>
          </div>

            {isUserCreated && <p className="p_success">Tu cuenta ha sido creada</p>}
            {isCreatedError && <p className="p_error">Ha ocurrido un error</p>}

         </div>
    )
};
export default Register;
