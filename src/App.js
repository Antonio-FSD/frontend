import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginContextProvider } from './Msc/LoginContext.js';
import Banner from './Components/Banner.js';
import Head from './Components/Head.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';
import Login from './Components/Pages/Login.js';
import Register from './Components/Pages/Register.js';
import MoviesByGenre from './Components/Home/MoviesByGenre.js';
import Profile from './Components/Pages/Profile.js';
import Results from './Components/Pages/Results.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <LoginContextProvider>
          <Banner />
          <Head />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path="/search" element={<Results />} />
              <Route exact path="/genre/:genreId" element={<MoviesByGenre />} /> 
          </Routes>
          <Footer />
        </LoginContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
