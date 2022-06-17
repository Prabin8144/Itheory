import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../CssComponent/cart.module.css"
function Cart1() {

  const navigate = useNavigate();

  var localitem = JSON.parse(localStorage.getItem("cartitms"))
  var [popitems,setPopitems] = useState(localitem)
  const [price,setprice]=useState(0)
  console.log(popitems)


// remove
   const remove=(item)=>{
    console.log(item)
      localStorage.setItem("cartitms", JSON.stringify(popitems?.filter((x) => x.id !== item.id)))
      setPopitems(JSON.parse(localStorage.getItem("cartitms")))

  }
  
//   for price
 useEffect(() => {
 function getTotall(){
  let temp = popitems.map(function(el){
    return parseInt(el.price)
  })
  let sum = temp.reduce(function(prev,next){
    return prev+next
   
  },0)
  setprice(sum)
  
 }
 getTotall()
 
}, [popitems])





return (
  <div style={{marginTop:"100px"}}>
    <h1 style={{color:"red",fontSize:"40px"}}>CART</h1>
    {localitem.map(item => (
  <div className={styles.card}>
     <div>
     <button style={{color:"black",border:"1px solid black",padding:"10px",backgroundColor:"darkred"}} onClick={()=>remove(item)}>REMOVE</button>
     </div>
      <div>
          <img  className={styles.imgData}src={item.image} alt={item.name} />
      </div>
      <div>
         <p>{item.title}</p>     
         </div>                       
      <div >
      <h3 style={{textDecoration:"line-through"}}>{item.cutprice}</h3>
      <h4>{item.price}</h4>                                            
      </div>  
      
  </div>
 
))};
   
   <div style={{color:"green",fontSize:"20px"}}> Totall Cost :-{price}</div>
      <button style={{marginTop: "20px",
    border: "3px solid orangered",
    borderRadius: "50px",
    width: "300px",
    height: "50px",
    fontWeight: "bolder",
    textAlign:"center",
    backgroundColor: "rgba(255, 68, 0, 0.514)"}} onClick={() => navigate("/paymenttype")}>
     GO TO PAYMENT SECTION
    </button>
   
</div>


  )
}

export default Cart1