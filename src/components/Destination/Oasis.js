import React from 'react'
import styles from './Oasis.module.scss'

const Oasis = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.A}>A BOHEMIAN OASIS</div>
            <div className={styles.B}>Check Out El Portal</div>
            <div className={styles.C}>
                <div className={styles.photoOne}></div>
                <div className={styles.photoTwo}></div>
                <div className={styles.photoThree}></div>
                <div className={styles.photoFour}></div>
            </div>
        </div>
    </>
  )
}

export default Oasis