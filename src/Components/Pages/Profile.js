import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Msc/LoginContext";
import '../../Styles/Profile.css';

const Profile = () => {
 
  const { userProfile, userLogout } = useContext(LoginContext);

  const [userInfo, setUserInfo] = useState(userProfile); 
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [isCreatedError, setIsCreatedError] = useState(false);

  const navigate = useNavigate();

  const checkLoggedUser = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkLoggedUser();
    // eslint-disable-next-line
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .patch(`${process.env.REACT_APP_BACKEND}/users/`, userInfo, {
        headers: {
          authorization: window.localStorage.getItem("token"), 
        },
      })
      .then(function(response) {
        console.log("success", response);
        setIsUserCreated(true);
        setUserInfo(userProfile);
      })
      .catch(function(error) {
        console.log(error);
        setIsCreatedError(true);
        setUserInfo(userProfile);
      });
  };

  const deleteUser = async () => {
    const userId = userInfo.id;
    const userDeleted = await axios.delete(
      `${process.env.REACT_APP_BACKEND}/users/${userId}`
    );
    alert("Tu usuario ha sido eliminado", userDeleted);
  };

  return (
    <div className="InfoUser">
     
      <div className="UserCard">
        <h1>Hola {userInfo.name}, bienvenido a tu perfil</h1>
        <form className="form">
          <div className="">
            <label className="titulo3">Nombre</label>
            <input
              required
              placeholder="Nombre"
              id="required-name"
              name="Nombre"
              type="text"
              className="titulo6"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
          </div>
          <div className="">
            <label className="titulo3">Apellido</label>
            <input
              required
              placeholder="Apellido"
              id="required-surname"
              name="Apellido"
              type="text"
              className="titulo6"
              value={userInfo.surname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, surname: e.target.value })
              }
            />
          </div>
          <div className="">
            <label className="titulo3">NIckname</label>
            <input
              required
              placeholder="Nickname"
              id="required-user"
              name="User"
              type="text"
              className="titulo6"
              value={userInfo.nickname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, nickname: e.target.value })
              }
            />
          </div>

          <div className="">
            <label className="titulo4">E-mail</label>
            <input
              required
              placeholder="E-mail"
              id="required-mail"
              name="mail"
              type="text"
              className="titulo7"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>

          <input
            type="submit"
            className="update"
            onClick={updateUser}
            value="update"
          />

        <input
            type="submit"
            className="delete"
            onClick={deleteUser}
            value="delete"
          />
        </form>

        <input
          type="submit"
          className="logout"
          onClick={userLogout}
          value="logOut"
        />

        {isUserCreated && (
          <p className="p_success">Tu cuenta se ha actualizado </p>
        )}

        {isCreatedError && <p className="p_error">Ha ocurrido un error</p>}

      </div>
    </div>
  );
};

export default Profile;
