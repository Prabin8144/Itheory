import React, { useEffect, useState }  from 'react'
import styles from "../CssComponent/internship.module.css"
import { BsShare } from 'react-icons/bs';
import data from "../data.json"

const Intern1 = () => {

    
   
  return (
      <div>
<div className={styles.searchboxes}>
      <div className={styles.citydiv}>
        <input type="text" name="" className={styles.cities} placeholder="Cities..." />
      </div>

      <div className={styles.typediv}>
        <input type="text" name="" className={styles.type} placeholder="Type..." />
      </div>

      <div className={styles.prefdiv}>
        <input type="text" name="" className={styles.pref} placeholder="Preferences..." />
      </div>
      <div>OR</div>
      <div className={styles.last}>
        <div className={styles.searchdiv}>
          <input type="text" name="" className={styles.search} placeholder="Search..." />
          <button className={styles.searchbtn}>Search</button>
        </div>
      </div>
    </div>

     
    <div >
    <div className={styles.leftimgd}>
        <img
          className={styles.leftdivimg}
          src="https://assets.interntheory.com/creative/Internship_left_course_add_02.png"
          alt=""
        />
      </div>
        {data.map((el)=>( 
           
       <div key={el.id}  className={styles.maindiv}>
           
            <div className={styles.imgdiv}>
                <img src={el.logo} alt="" />
            </div>
            <div className={styles.tagdiv}>
            <div >{el.title}</div>
            <div>{el.company_name}</div>
            <div>{el.location}</div>
            <div>{el.internship_type}</div>
            <div>{el.category_name}</div>
            <b>{el.stipend}</b>
            <div>{el.days_left}</div>
            <b>{el.slug}</b>
            </div>
           <div>
               <div>4 Week Left</div>
              <BsShare style={{margin:'20px',fontSize:"25px"}}/>
              <button style={{marginTop:"100px",color:"blue"}}>Upgrade</button>
           </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Intern1