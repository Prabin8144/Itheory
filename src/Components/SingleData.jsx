import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from "../CssComponent/know.module.css"


const SingleData = () => {


    const [singleTodo, setSingleTodo] = useState([]);

   
  
    const params = useParams();
    console.log(params);
  
    useEffect(() => {
      getSingleTodo(params.id);
    }, []);
  
   
    const getSingleTodo = async () => {
        try {
          let res = await axios.get(`http://localhost:8080/data/${params.id}`);
          let data = await res.data;
          console.log(data);
          setSingleTodo({ ...data });
          console.log(singleTodo)
        } catch (err) {
          console.log(err);
        }
      };
  return (
   <>

         <div key={singleTodo.id} className={styles.banner} >
                <img src={singleTodo.image} alt="" />
                </div>
      
            <div className={styles.duration}>
              <div className={styles.week}>
                <p>Duration</p>
                <h4>{singleTodo.week}</h4>
              </div>
              <div className={styles.pricediv}>
                <div className={styles.price}>
                  <h1>{singleTodo.price}</h1>
                  <p style={{textDecoration:"line-through"}}>{singleTodo.cutprice}</p>
                </div>
                <button className={styles.checkout}>ADD TO CART</button>
                  <p>OR</p>
               <button className={styles.enroll}>ENROLL NOW</button>
              </div>
            </div>
            <div className={styles.content}>
              <h2 style={{fontSize:"35px",fontWeight:"bold",textAlign:"justify"}}>{singleTodo.title}</h2>
              <p style={{fontSize:"17px",fontWeight:"bold",textAlign:"justify"}}>{singleTodo.descp}</p>
            </div>
            <div className={styles.keys}>
      <div className={styles.feature}>
        <p className={styles.kf}>Key Features</p>
        <div className={styles.featureimg}>
          <div>
            <img
              src="https://assets.interntheory.com/creative/features_icon/certified.png"
              alt=""
            />
            <b>Certified</b>
          </div>
          <div>
            <img
              src="https://assets.interntheory.com/creative/features_icon/study-at-your-own-time.png"
              alt=""
            />
            <b>Study At Your Own Time</b>
          </div>
          <div>
            <img
              src="https://assets.interntheory.com/creative/features_icon/learn-from-professional.png"
              alt=""
            />
            <b>Learn from Industry Professionals</b>
          </div>
          <div>
            <img
              src="https://assets.interntheory.com/creative/features_icon/study-more.png"
              alt=""
            />
            <b>More Practice, Less Theory</b>
          </div>
        </div>
      </div>
      <div className={styles.students}>
        <p className={styles.sf}>What will a student get after the course?</p>
        <div className={styles.studentimg}>
          <div>
            <img
              src="https://assets.interntheory.com/creative/features_icon/certificate-to-upgrade.png"
              alt=""
            />
            <b>4 Certificates to upgrade your resume</b>
          </div>
          <div>
            <img
              src="https://assets.interntheory.com/creative/features_icon/internships.png"
              alt=""
            />
            <b> Internship Assistance</b>
          </div>
        </div>
      </div>
    </div>
    </>         
           
  )
}

export default SingleData