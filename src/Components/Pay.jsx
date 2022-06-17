import { useToast } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../CssComponent/Pay.module.css"
const Pay = () => {
    const toast = useToast({
        position: 'down',
        title: 'Otp Sent Successfull',
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })

    const handleClick = ()=>{
        toast({
          })
    }
  
  return (
    <div>
    <div className={styles.content}>
        <div className={styles.mainpaymentpage}>
         <div className={styles.paymentheader}>
             <div className={styles.paymentbar123} ></div>
             <div className={styles.paymentIntern}>Intern Theory</div>
             <div className={styles.paymentpur}>Purchase Description</div>
             <div  className={styles.paymentrs}>Payment via Card</div>
             <div className={styles.paymentselect}>
                 <select name="English" className={styles.paymentlanguage}>
                     <option value="0" className={styles.paymentoptions1}>English</option>
                     <option value="1" className={styles.paymentoptions1}>বাংলা</option>
                     <option value="2" className={styles.paymentoptions1}>हिंदी</option>
                     <option value="3" className={styles.paymentoptions1}>मराठी</option>
                     <option value="4" className={styles.paymentoptions1}>ગુજરાતી</option>
                     <option value="5" className={styles.paymentoptions1}>தமிழ்</option>
                     <option value="6" className={styles.paymentoptions1}>తెలుగు</option>
                 </select>
             </div>
         </div>
    <div className={styles.cardDetails}>
        <div className={styles.cardDetails12}> 
    <div>+91 8144543003</div>
    </div>
             
            <div className={styles.cardDetails1234}>Add New Card</div>
            <form className={styles.cardDetailsform}>
                <div className={styles.cardDetailsinput1}>
                    <div>
                        <input type="number" placeholder="Card Number" className={styles.cardDetailsinputtake}/>
                    </div>
                    <div>
                        <input type="tel" placeholder="Expiry" className={styles.cardDetailsinputtake}/>
                       
                    </div>
                </div>
                <div className={styles.cardDetailsinput1}>
                    <div>
                        <input type="text" placeholder="Card Holder's name" className={styles.cardDetailsinputtake}/>
                    </div>
                    <div>
                        <input type="number" placeholder="CVV" className={styles.cardDetailsinputtake}/>
                       
                    </div>
                </div>
                <div className={styles.cardDetailscheckboxDiv}>
                    <input type="checkbox" className={styles.cardDetailscheckbox}/> Capcha Code
                </div>
               <Link to="/otp"> <button  onClick={handleClick} className={styles.cardDetailssubmit}>Complete Transaction</button></Link>
                </form>
               
        </div>

        </div>
        </div>  
           
    </div>
  )
}

export default Pay