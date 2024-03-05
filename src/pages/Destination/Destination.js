import React from 'react'
import styles from './Destination.module.scss'
import DineIn from '../../components/Destination/DineIn'

const Destination = () => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.left}>left</div>
        <div className={styles.middle}>DESTINATIOIN TROFI<br /><span className={styles.middleB}>MIAMI</span></div>
        <div className={styles.right}>right</div>
      </div>
      <DineIn />
    </>
  )
}

export default Destination