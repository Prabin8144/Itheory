import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype";
import axios from "axios"




const loinRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token,
  });
  
  const loginFailure = () => ({
    type: LOGIN_FAILURE,
  });



  
