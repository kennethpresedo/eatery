import React from 'react'
import styles from './ContactUs.module.scss'
import Footer from '../../components/Footer/Footer'

const ContactUs = () => {
  return (
    <>
      <div className={styles.container}>
          <div className={styles.leftContent}>
            <div className={styles.left}>
              <div className={styles.hoursHead}>HOURS:</div>
              <div className={styles.hours}>
                Weds-Thurs 5pm-10:30pm<br />
                Friday 5pm-11pm<br />
                Saturday 11am-11pm<br />
                Sunday 11am-10pm<br />
                Monday-Tuesday Closed</div>
              <div className={styles.addressHead}>ADDRESS:</div>
              <div className={styles.address}>
                555 NE 5TH AVE
                MIAMI SHORES, FL</div>
              <div className={styles.directions}>GET DIRECTIONS</div>
              <div className={styles.parkingHead}>PARKING:</div>
              <div className={styles.parking}>
                Uber/Lyft recommended.<br />
                Street parking is limited
                Valet parking available</div>
              <div className={styles.welcome}>* We kindly ask you to arrive on time, seats are time limited. Dress Code: Smart nostalgia & 1970’s welcome!</div>
              <div className={styles.experienceButton}>BOOK YOUR EXPERIENCE</div>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.right}></div>
          </div>
          
      </div>
      <div className={styles.blank}></div>
      <Footer />
    </>
  )
}

export default ContactUs