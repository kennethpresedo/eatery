import React from 'react'
import styles from './Brunch.module.scss'

const Brunch = () => {
  return (
    <>
    <div className={styles.container}>

    <div className={styles.photo}></div>
        <div className={styles.listing}>
            <div className={styles.wordColoum}>
            <div className={styles.title}>Brunch Menu</div>
            <div className={styles.hours}>
                <div className={styles.listHours}>HOURS: SATURDAY & SUNDAY 11AM—5PM</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.featured}>Featured Menu Items</div>
            <div className={styles.item}>RED SHAKSHUKA (VG)</div>
            <div className={styles.description}>Tomatoes, Matbucha, Tahini</div>
            <div className={styles.item}>BOUREKAS SABICH (VG)</div>
            <div className={styles.description}>Roasted Eggplant, Filo Pastry, Fried Egg</div>
            <div className={styles.item}>STEAK & EGGS (GF)</div>
            <div className={styles.description}>12oz. NY Strip, Fried Eggs, Potatoes</div>
            <div className={styles.button}>FULL BRUNCH MENU</div>
        </div>
        <div/>
    </div>
    </div>
</>
  )
}

export default Brunch
