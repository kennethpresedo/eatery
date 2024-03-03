import React from 'react'
import styles from './Sweets.module.scss'

const Sweets = () => {
  return (
    <>
    <div className={styles.container}>

    <div className={styles.photo}></div>
        <div className={styles.listing}>
            <div className={styles.wordColoum}>
            <div className={styles.title}>Sweets</div>
            <div className={styles.line}></div>
            <div className={styles.featured}>Featured Desserts</div>
            <div className={styles.item}>LAYALI BEIROUT</div>
            <div className={styles.description}>Semolina Pudding, Dried Figs, Pistachios, Cream, Flowers</div>
            <div className={styles.item}>HALVA TAHINI PIE</div>
            <div className={styles.description}>Pistachio & Tahini Pie, Creme Fraiche</div>
            <div className={styles.button}>FULL DESSERT MENU</div>
        </div>
        <div/>
    </div>
    </div>
</>
  )
}

export default Sweets
