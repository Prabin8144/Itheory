import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../CssComponent/create.module.css"
const CreateAcc = () => {
  return (
    <div>
            <div className={styles.belowNavBar} >
      <form className={styles.StudentLoginForm} >
        <div className={styles.StudentLoginContainer} >
          <h5>Register Candidate</h5>
          <div>Already have an account?<Link to="/st"><span>Sign in</span></Link></div>
          <div>
            If you are a company looking to hire interns, please login as a
            company by clicking <span>here</span>.
          </div>
          <div>
            <img
              src="https://www.interntheory.com/assets/iconsLogos/facebook-circular-logo.svg" alt=''/>
            <span>REGISTER WITH FACEBOOK</span>
          </div>
          <div>
            <img
              src="https://www.interntheory.com/assets/iconsLogos/googlelogo.svg" alt=''/>
            <span>REGISTER WITH GOOGLE</span>
          </div>
          <div>OR</div>
          <div>
            <div>
              <div className={styles.RegisterFirstNameAlert} >First Name*</div>
              <div>
                <input
                  required
                  className={styles.RegisterFirstNameInput}
                  type="text"
                  placeholder="First Name*"
                />
              </div>
              <div className={styles.RegisterFirstNameRequired} >Required</div>
            </div>
            <div>
              <div className={styles.RegisterLastNameAlert} >Last Name*</div>
              <div>
                <input
                  required
                  className={styles.RegisterLastNameInput}
                  type="text"
                  placeholder="Last Name*"
                />
              </div>
              <div className={styles.RegisterLastNameRequired} >Required</div>
            </div>
          </div>
          <div>
            <div className={styles.RegisterEmailAlert} >Email*</div>
            <div>
              <input
                required
                className={styles.RegisterEmailInput}
                type="email"
                placeholder="Email*"
              />
            </div>
            <div className={styles.RegisterEmailRequired} >Required</div>
          </div>
          <div>
            <div className={styles.RegisterPasswordAlert} >Password*</div>
            <div>
              <input
                required
                className={styles.RegisterPasswordInput}
                type="password"
                placeholder="Password*"
              />
            </div>
            <div className={styles.RegisterPasswordRequired} >Required</div>
          </div>
          <div>
            <div className={styles.RegisterNumberAlert} >Mobile Number*</div>
            <div>
              <input
                required
                className={styles.RegisterNumberInput}
                type="number"
                placeholder="Mobile Number*"
              />
            </div>
            <div className={styles.RegisterNumberRequired} >Required</div>
          </div>
          <div>
            <div className={styles.RegisterCityDiv} >
              <input
                required
                className={styles.RegisterCityInput}
                type="text"
                placeholder="Select City"
              />
              <div>i</div>
            </div>
            <div className={styles.RegisterCityRequired} >Required</div>
            <div className={styles.RegisterCityName} ></div>
          </div>
          <div>
            <div className={styles.RegisterPreferenceDiv} >
              <input
                required
                className={styles.RegisterPreferenceInput}
                type="text"
                placeholder="Preferences Select one or more*"
              />
              <div>i</div>
            </div>
            <div className={styles.RegisterPreferenceRequired} >Required</div>
            <div className={styles.RegisterPreference} ></div>
          </div>
          <div>
            <div className={styles.RegisterFindUsDiv} >
              <input
                required
                className={styles.RegisterFindUsInput}
                type="text"
                placeholder="How did you find us?*"
              />
              <div>i</div>
            </div>
            <div className={styles.RegisterFindUsRequired} >Required</div>
            <div className={styles.RegisterFindUs} ></div>
          </div>
          <div>
            <div className={styles.RegisterLookingForDiv} >
              <input
                required
                className={styles.RegisterLookingForInput} 
                type= "text" 
                placeholder = "What are you looking for?*" />
              <div>i</div>
            </div>
            <div className={styles.RegisterLookingForRequired} >Required</div>
            <div className={styles.RegisterLookingFor} ></div>
          </div>
          <div>
            <input type="text" placeholder="Affiliate Code (if any)" />
          </div>
          <Link to="/st"><input type="submit" value="NEXT"/></Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default CreateAcc