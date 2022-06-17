import {CircularProgress, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Otp = () => {
  const handleClick = ()=>{
    <CircularProgress isIndeterminate color='green.300' />
  }

  return (
    <div style={{marginTop:"200px",margin:"auto",height:"300px",width:"300px",border:"1px solid red", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
       <h1 style={{fontSize:"20px",color:"green"}}>Enter 4 digit Otp Given To Your Number..</h1>
     <div style={{marginTop:"30px",marginLeft:"40px"}}>
   
        <HStack>
            
  <PinInput placeholder='🥳' type='alphanumeric' mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>

</div>
 <Link to="/sucess"><button onClick={handleClick} style={{color:"white",backgroundColor:"red",padding:"10px",borderRadius:"5px",marginTop:"20px"}}>Confirm Payment</button></Link>
    </div>
  )
}

export default Otp