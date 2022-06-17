import './App.css';

import Footer from './Components/Footer';
import Home from './Components/Home';
import Intern from './Components/Intern';
import LoginCompany from './Components/LoginCompany';
import LoginStudent from './Components/LoginStudent';
import Navbar from './Components/Navbar';
import Pay from './Components/Pay';
import { Slide } from './Components/Slide';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <div className="App">
     
     {/* <Footer/> */}
     {/* <Navbar/> */}
     {/* <Home/> */}
     {/* <Slide/> */}
     <MainRoutes/>
     {/* <Intern/> */}
    {/* <Pay/> */}
     
    </div>
  );
}

export default App;
