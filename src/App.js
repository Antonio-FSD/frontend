import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from './Components/Banner.js';
import Head from './Components/Head.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';
import SeatsReservation from './Components/Pages/SeatsReservation.js';
import Login from './Components/Pages/Login.js';
import Register from './Components/Pages/Register.js';
import './App.css';
import { LoginContextProvider } from './Msc/LoginContext.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <LoginContextProvider>
          <Banner />
          <Head />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/reservations' element={<SeatsReservation />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </LoginContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
