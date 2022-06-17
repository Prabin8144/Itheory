import { createContext, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
  const [isAuth,setIsAuth] = useState(false);

  const navigate  = useNavigate()
//   loaction me state he isiliye idko disturucre kiya
  const {state} = useLocation()


  const login = ()=> {
    setIsAuth(true)
   
      navigate("/")
    
  }

  const logout = ()=> {
    setIsAuth(false)
  }

  return(
      <AuthContext.Provider value={{isAuth,login,logout}}>
          {children}
      </AuthContext.Provider>
  )
}