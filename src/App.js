import './App.css';
import { BrowserRouter } from "react-router-dom";
import Banner from './Components/Banner';
/* import Head from './Components/Head'; */

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Banner/>
{/*           <Head />  */} 
      </BrowserRouter>
    </div>
  );
}

export default App;
