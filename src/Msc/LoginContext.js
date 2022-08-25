import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext({}); 

const LoginContextProvider = ({ children }) => {
	const [userProfile, setUserProfile] = useState({});
	
	const navigate = useNavigate();


	const userLogout = () => {
		localStorage.removeItem('token'); 
		localStorage.removeItem('profile');
		setUserProfile({});
		navigate('/')
	};

	const value = { 
		userProfile,
        setUserProfile,
		userLogout
	};

	return(
		<LoginContext.Provider value={{ ...value }}> 
			{children}
		</LoginContext.Provider>
	) 
};

export { LoginContext, LoginContextProvider };