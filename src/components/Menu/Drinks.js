import React from 'react'
import styles from './Drinks.module.scss'

const Drinks = () => {
  return (
    <>
    <div className={styles.container}>

    <div className={styles.photo}></div>
        <div className={styles.listing}>
            <div className={styles.wordColoum}>
            <div className={styles.title}>Drinks Menu</div>
            <div className={styles.line}></div>
            <div className={styles.featured}>Featured Drinks</div>
            <div className={styles.item}>WHITE NOISE</div>
            <div className={styles.description}>White Chocolate, Menthe, Montenegro, Arak, Cream</div>
            <div className={styles.item}>WAKE UP SUZY</div>
            <div className={styles.description}>Vodka, Espresso, Kahlua, Cinnamon Vanilla</div>
            <div className={styles.button}>FULL AFTER HOUR DRINK MENU</div>
        </div>
        <div/>
    </div>
    </div>
</>
  )
}

export default Drinks
