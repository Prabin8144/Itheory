import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ReqAuth = ({children}) => {
    const {isAuth} = useContext(AuthContext)
  const loaction = useLocation()

       if(isAuth){
          return children
       
       }else{
        return <Navigate to="/st"
         state={{from:loaction.pathname}} 
         replace
        />
       }
    
}

export default ReqAuth