import { Toast, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import styles from "../CssComponent/LoginSt.module.css"



const LoginStudent = () => {

  const toast = useToast({
    position: 'top',
    title: 'Login in Succesfull',
    containerStyle: {
      width: '500px',
      maxWidth: '100%',
    },
  })

  const [log,setLog] = useState({})
  const{login} = useContext(AuthContext)
 
  const handleChange = (e)=>{
     const {name,value} = e.target;
     setLog({...log,[name]:value})
  }
 
 
 
   const handleSubmit = (e)=>{
       e.preventDefault();
       login()
       toast({
        containerStyle: {
          border: '20px solid red',
        },
      })
      
   }


  return (
    <div>
          <div className={styles.belowNavBar}>
      <form className={styles.StudentLoginForm} onSubmit={handleSubmit}>
        <div className={styles.StudentLoginContainer}>
        <div>
            <Link to="/com" className={styles.LoginStudentHeading}>STUDENT</Link>
            <Link to="/st" className={styles.LoginCompanyHeading}>COMPANY</Link>
          </div>
          <h5>Login</h5>
          <div>
            If you are a company looking to hire interns, please login as a
            company by clicking <span>here</span>.
          </div>
          <div>
            <img src="https://www.interntheory.com/assets/iconsLogos/facebook-circular-logo.svg"alt='' />
            <span>SIGNIN WITH FACEBOOK</span>
          </div>
          <div>
            <img src="https://www.interntheory.com/assets/iconsLogos/googlelogo.svg" alt=''  />
            <span>SIGNIN WITH GOOGLE</span>
          </div>
          <div>OR</div>
          <div>
            <div className={styles.EmailAlert}>Email/Number</div>
            <div className={styles.EmailDiv}>
             
              <input
                type="text"
                className={styles.EmailInput}
                placeholder="Email/Number"
                required
                onChange={handleChange}
              />
            </div>
            <div className={styles.EmailRequired}>Required</div>
          </div>
          <div>
            <div className={styles.PasswordAlert}>Password</div>
            <div className={styles.PasswordDiv}>
              <input
                type="password"
                className={styles.PasswordInput}
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            <div className={styles.PasswordRequired}>Required</div>
          </div>
          <div>
            <div>
              <input type="checkbox" />
              <div>Remember Me</div>
            </div>
            <div>Forgot Password?</div>
          </div>
          <div>
          <div>
              Don't have an account?
              <Link to="/create"><span className={styles.OpenRegistrationPage}>Create your account</span ></Link>
            </div>
          </div>
          <button type="submit" >LOGIN</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default LoginStudent