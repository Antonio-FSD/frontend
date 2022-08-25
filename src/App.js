import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from './Components/Banner.js';
import Head from './Components/Head.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Banner/>
        <Head />
        <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/category/:categoryId' element={''} />
            <Route  exact path='/ex' element={''} />
            <Route  exact path='/ex' element={''} />
            <Route  exact path='/ex' element={''} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
