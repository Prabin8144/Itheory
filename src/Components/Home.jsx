import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../CssComponent/Home.module.css"
import { Slide } from './Slide'
const Home = () => {
  return (
    <div>
        <div className={styles.belowNavBarDiv1}>
    <div>
      <img src="https://assets.interntheory.com/creative/Homepage-Banner.png" alt=''/>
    </div>
    <div>
      <div>
        <div>Let's Get You</div>
        <div>Ready</div>
      </div>
      <div>
        The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An
        Internship. Get Placed
      </div>
      <div className={styles.HomeSearchContainer}>
        <div className={styles.HomeSearchCity}>
          <div className={styles.HomeSearchCityDiv}>
            <input
              className={styles.HomeSearchCityInput}
              type="text"
              placeholder="Cities..."
            alt=''/>
          </div>
          <div className={styles.HomeSearchCity2}></div>
        </div>
        <div className={styles.HomeSearchType}>
          <div className={styles.HomeSearchTypeDiv}>
            <input
              className={styles.HomeSearchTypeInput}
              type="text"
              placeholder="Type..."
            alt=''/>
          </div>
          <div className={styles.HomeSearchType2}></div>
        </div>
        <div className={styles.HomeSearchPreferences}>
          <div className={styles.HomeSearchPreferencesDiv}>
            <input
              className={styles.HomeSearchPreferencesInput}
              type="text"
              placeholder="Preferences..."
            alt=''/>
          </div>
          <div className={styles.HomeSearchPreferences2}></div>
        </div>
        <div>OR</div>
        <div className={styles.HomeSearchDiv}>
          <input type="text" placeholder="Search..."/>
          <button>SEARCH</button>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.belowNavBarDiv2}>
    <div>
      <h2>PLETHORA OF OPPORTUNITIES<span>FOR YOU</span></h2>
        <div>We are on a mission to connect employers to young talent all over India. With our strong corporate
          network, it will no longer be a challenge to find the right internship for you</div>
    </div>
    <div>
      <div>
       
        <img src="https://assets.interntheory.com/creative/home-logo/logo-1.png"alt=''/>
       
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-2.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-3.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-4.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-5.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-6.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-7.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-8.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-9.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-10.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-11.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-12.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-13.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-14.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-15.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-16.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-17.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-18.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-19.png"alt=''/>
      </div>
      <div>
        <img src="https://assets.interntheory.com/creative/home-logo/logo-20.png"alt=''/>
      </div>
    </div>
  </div>
  <div className={styles.belowNavBarDiv3}>
    <div>
      <h1>LET'S GET SOME<span>WORK EXPERIENCE</span></h1>
    </div>
    <div>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/Marketing-Icon.jpg"alt=''/></di> </Link>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/BD.jpg"alt=''/></di> </Link>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/Content-Writing.jpg"alt=''/></di> </Link>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/Graphic.jpg"alt=''/></di> </Link>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/Finance.jpg"alt=''/></di> </Link>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/HR.jpg"alt=''/></di> </Link>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/Eng.jpg"alt=''/></di> </Link>
    <Link to="/intern1"> <di><img src="https://assets.interntheory.com/creative/home-internships/All-Internships.jpg"alt=''/></di> </Link>
      
    </div>
  </div>
  <div className={styles.belowNavBarDiv4}>
    <div>
      <h1>HOW ABOUT<span>UPSKILLING ?</span></h1>
    </div>
    <div>
      <div onclick="window.location.href='./onlinecourses.html'">
      <Link to="/intern"> <img src="https://assets.interntheory.com/creative/home-courses/Homepage-stock.jpg"alt=''/></Link>
      </div>
      <div onclick="window.location.href='./onlinecourses.html'">
      <Link to="/intern"><img src="https://assets.interntheory.com/creative/home-courses/Homepage-digital.jpg"alt=''/></Link>
      </div>
      <div onclick="window.location.href='./onlinecourses.html'">
      <Link to="/intern"> <img src="https://assets.interntheory.com/creative/home-courses/Homepage-web.jpg"alt=''/></Link>
      </div>
    </div>
  </div>
  <div className={styles.belowNavBarDiv5}>
    <div>
      <div>
        <img src="https://assets.interntheory.com/creative/chart.png"alt=''/>
      </div>
    </div>
    <div>
        <h2>
          WE ARE CONSTANTLY<span>GROWING</span>
        </h2>
          <div>We are on a mission to help every student in India. Upgrading your CV and getting you a meaningful job remains our sole motive and we are not stopping anytime soon.
          </div>
    </div>
  </div>
  <Slide/>
    </div>
     
  )
}

export default Home