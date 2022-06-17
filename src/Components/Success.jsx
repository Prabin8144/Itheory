import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div>
        <div className="container">
    <center>
      <img
        src="https://momentumacademy.net/wp-content/uploads/2020/05/Paymentsuccessful21.png"
        alt=""
      />
    </center>
  </div>
  <center>
  <Link to="/"><button style={{color:"white",backgroundColor:"red",padding:"10px",borderRadius:"5px",marginTop:"20px"}}>GoBack To Home</button></Link>
  </center>
  </div>
  )
}

export default Success