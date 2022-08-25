import React, { useState }from 'react';
import axios from 'axios'; //npm i axios
import { Link } from 'react-router-dom';
/* import './pages.css';
 */
const initRegister = {
  nickName: '',
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
            <img src='' alt="Wallapop" width="500" height="400" className="login-image" />
          </div>
          <div className="secondModule">
            <form>
              <input 
                required 
                placeholder="Usuario"
                id="required-user" 
                name="User" 
                type="text"
                value={registerInfo.nickname} 
                onChange={e => setRegisterInfo({...registerInfo, nickName:e.target.value })}/><br /><br />
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
                <Link to="/login">
                  ¿Ya tienes una cuenta?
                </Link>
            </form>
          </div>

            {isUserCreated && <p className="p_success">Tu cuenta ha sido creada</p>}
            {isCreatedError && <p className="p_error">Ha ocurrido un error</p>}

         </div>
    )
};
export default Register;
