import React from 'react'
import styles from './Socials.module.scss'

const Socials = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.A}>FOLLOW US</div>
            <div className={styles.B}>Follow us for news and updates!</div>
            <div className={styles.C}>
                <div className={styles.photoOne}></div>
                <div className={styles.photoTwo}></div>
                <div className={styles.photoThree}></div>
                <div className={styles.photoFour}></div>
            </div>
            <div className={styles.D}>
                <div className={styles.linkedin}></div>
                <div className={styles.instagram}></div>
            </div>
        </div>
    </>
  )
}

export default Socials