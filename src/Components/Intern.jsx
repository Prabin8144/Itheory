import React, { useEffect, useState }  from 'react'
import styles from "../CssComponent/Intern.module.css"
import { BsShare } from 'react-icons/bs';
import { getProducts, toCart } from '../redux/Todo/action';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';

const Intern = () => {

    const { data } = useSelector((state) => state.todo.todos);
   
    const [count, setCount] = useState(0);
    const [authCount, setAuthCount] = useState(false);
   
    const params = useParams();
    console.log(params);
    //todos come in intiall state
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts());
      console.log(data);
    }, [dispatch]);


// add

var arr = JSON.parse(localStorage.getItem("cartitms")) || []      
  const addcart=(el)=>{
  
  
      arr.push(el)
      localStorage.setItem("cartitms", JSON.stringify(arr))
      console.log(arr)
    }
   
  
  
   
  return (
      <>
          <div className={styles.bannerdiv}>
      <img
        className={styles.underbanner}
        src="https://assets.interntheory.com/creative/courses/listpage/Course-bannerbg.jpg"
      alt=''/>
      <img
        className={styles.banner}
        src="https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png"
        alt=""
      />
    </div>
    <div className={styles.coursehead}>
      <p>Certified Online Courses</p>
      <p>
        Upgrade your skills with Intern Theory's online learning platform. Enrol
        for any certified online courses and get a step ahead of competition.
        Select from a range of skill based online courses and kickstart your
        career.
      </p>
    </div>

        {data.map((el)=>(     
       <div className={styles.courses} key={el.id}>
         <div>
             <img src={el.image} alt="" />
             <div className={styles.title}>
            <h4>{el.title}</h4>
             <p>{el.descp}</p>
             </div>
             <div className={styles.downdiv}>
                 <div className={styles.price}>
                     <p style={{textDecoration:"line-through"}}>{el.cutprice}</p>
                     <h3>{el.price}</h3>
                 </div>
                 <div className={styles.emi}>
                     <p>{el.emi}</p>
                     <i></i>
                 </div>
                 <div className={styles.cartbtn}>
                     <Link to={`/intern/${el.id}`}><p className={styles.know}>KNOW MORE</p></Link>
                     <button className={styles.add} onClick={()=>addcart(el)}>ADD TO CART</button>
                 </div>
             </div>
         </div>
    </div>
        ))}
    </>

  )
}

export default Intern