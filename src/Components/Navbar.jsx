import React, { useContext } from 'react'
import styles from "../CssComponent/Navbar.module.css"
import { FaShoppingCart } from 'react-icons/fa';
import { DrawerExample } from "./NavButton"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FcBusinesswoman } from 'react-icons/fc';
import { IoIosNotifications } from 'react-icons/io';

const Navbar = () => {
  const navigate = useNavigate()



const {isAuth,login,logout} = useContext(AuthContext)

 

    const handleClick= ()=>{
       if(isAuth){
           logout()
        navigate("/")
       }else{
        navigate("/login")
       }
    }



    
  return (
    <div className={styles.NavBar}>
        <div className={styles.main}>    
    <div className={styles.NavBarCart}>
   <DrawerExample/>
    </div>
    <div  className={styles.NavBarimg}>
    <img src="https://assets.interntheory.com/creative/logo.png" alt='rr' />
    </div>
    </div>
    {isAuth?<IoIosNotifications style={{marginLeft:"990px",marginTop:"19px",fontSize:"25px"}}/>:""}
  <div>
  
    <div className={styles.NavBarCart}>
    
     <Link to="/cart"><FaShoppingCart style={{marginTop:"12px",marginLeft:"14px"}}/></Link> 
    </div>
    <div className={styles.NavBarSignIN}>
      <Link to="/st" className={styles.Link}><button  onClick={handleClick}>{isAuth ? <FcBusinesswoman style={{boxStyle:"none",backgroundColor:"white",fontSize:"70px"}}/>:"SIGN IN"}</button></Link>
    </div>
    </div>
 </div>
  )
}

export default Navbar