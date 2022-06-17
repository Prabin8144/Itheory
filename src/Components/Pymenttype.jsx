import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../CssComponent/paytype.module.css"
const Pymenttype = () => {
  return (
    <div style={{width:"70%",margin:"auto"}}>
        <div className={styles.cartp}>
              <h2>Pay Via</h2>
            </div>
            <div className={styles.cartpop3}>
              <div className={styles.carta1}>
                <Link to="/pay" className={styles.cartanchor} >CREDIT CARD</Link>
              </div>
              <div className={styles.carta1}>
                <Link to="/pay" className={styles.cartanchor} >NET BANKING</Link>
              </div>
              <div className={styles.carta1}>
                <Link to="/pay" className={styles.cartanchor} >UPI</Link>
              </div>

              <div className={styles.carta1}>
                <Link to="/pay" className={styles.cartanchor} >DEBIT CARD</Link>
              </div>
              <div className={styles.carta1}>
                <Link to="/pay" className={styles.cartanchor} >PAYTM</Link>
              </div>
              <div className={styles.carta1}>
                <Link to="/pay" className={styles.cartanchor} >EMI(CREDIT CARD)</Link>
              </div>
            </div>
    </div>
  )
}

export default Pymenttype