import React from 'react'
import styles from  "../CssComponent/Footer.module.css"
import { GrFacebook } from 'react-icons/gr';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
      <>
      <div className={styles.Footer}>
       
    <div style={{marginTop:"48px"}}>
    <div style={{marginRight:"-30px",marginTop:"15px"}}>
      <div style={{marginTop:"15px",fontSize:"20px",color:"white"}}><a href='https://www.facebook.com/interntheory'><GrFacebook/></a></div>
      <div style={{marginTop:"15px",fontSize:"20px",color:"white"}}><a href='https://www.linkedin.com/company/interntheory/about/'><AiFillLinkedin/></a></div>
      <div style={{marginTop:"15px",fontSize:"20px",color:"white"}}><a href='https://twitter.com/InternTheory'><AiFillTwitterSquare/></a></div>
      <div style={{marginTop:"15px",fontSize:"20px",color:"white"}}><a href='https://www.instagram.com/interntheory/'><FaInstagramSquare/></a></div>
    </div>
    <div>
      <div>
        <div className={styles.FooterThreeHeading}>BY PLACE</div>
        <div className={styles.FooterList}>Internships In Mumbai</div>
        <div className={styles.FooterList}>Internships In Delhi</div>
        <div className={styles.FooterList}>Internships In Bangalore</div>
        <div className={styles.FooterList}>Internships In Pune</div>
        <div className={styles.FooterList}>Internships In Hyderabad</div>
      </div>
      <div>
        <div className={styles.FooterThreeHeading}>BY PROFILE</div>
        <div className={styles.FooterList}>Marketing Internships</div>
        <div className={styles.FooterList}>Business Development Internships</div>
        <div className={styles.FooterList}>Content Writing Internships</div>
        <div className={styles.FooterList}>Graphic Designing Internships</div>
        <div className={styles.FooterList}>HR Internships</div>
        <div className={styles.FooterList}>Engineering Internships</div>
      </div>
      <div>
        <div className={styles.FooterThreeHeading}>BY TYPE</div>
        <div className={styles.FooterList}>Full Time Internships</div>
        <div className={styles.FooterList}>Part Time Internships</div>
        <div className={styles.FooterList}>Work From Home Internships</div>
      </div>
    </div>
  </div>
  <div>
    <div>REFUND & CANCELLATION POLICY</div>
    <div>COURSES</div>
    <div>TERMS AND CONDITIONS</div>
    <div>PRIVACY POLICY</div>
    <div>CONTACT US</div>
    <div>ABOUT US</div>
    <div>SITEMAP</div>
  </div>
  <div>© 2015 - 2022 INTERNTHEORY. ALL RIGHTS RESERVED.</div>
  </div>
  </>
  )
}

export default Footer