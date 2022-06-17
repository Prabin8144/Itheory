import React from 'react'
import {Route, Routes} from "react-router-dom"
import Cart1 from './Components/Cart1'
import CreateAcc from './Components/CreateAcc'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Intern from './Components/Intern'
import Intern1 from './Components/Intern1'
import LoginCompany from './Components/LoginCompany'
import LoginStudent from './Components/LoginStudent'
import Navbar from './Components/Navbar'
import Otp from './Components/Otp'
import Pay from './Components/Pay'
import Pymenttype from './Components/Pymenttype'
import SingleData from './Components/SingleData'
import Success from './Components/Success'
import ReqAuth from './hoc/ReqAuth'


const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        
        <Routes>
           <Route path='/' element={<Home/>}/>
            <Route path='/st' element={<LoginStudent/>}/>
            <Route path='/com' element={<LoginCompany/>}/>
            <Route path='/create' element={<CreateAcc/>}/>
            <Route path='/intern1' element={<Intern1/>}/>
            <Route path='/intern' element={<Intern/>}/>
            <Route path='/intern/:id' element={<SingleData/>}/>
            <Route  path='/cart' element={<ReqAuth><Cart1/></ReqAuth>}/>
            <Route  path='/paymenttype' element={<Pymenttype/>}/>
            <Route  path='/otp' element={<Otp/>}/>
            <Route  path='/pay' element={<Pay/>}/>
            <Route path='/sucess' element={<Success/>}/>
        </Routes>
        <Footer/>
       
    </div>
  )
}

export default MainRoutes