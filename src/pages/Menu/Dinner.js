import React from 'react'
import styles from './Dinner.module.scss'

const Dinner = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.wordColoum}>
                    <div className={styles.title}>Dinner Menu</div>
                    <div className={styles.hours}>
                        <div className={styles.listHours} style={{ fontSize: "1.5vw" }}>HOURS:</div>
                        <div className={styles.listHours}>WEDS-THURS  5PM—10:30PM</div>
                        <div className={styles.listHours}> FRI-SAT  5PM—11PM</div>
                        <div className={styles.listHours}>SUN 5PM—10</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.featured}>Featured Menu Items</div>
                    <div className={styles.item}>FISHWARMA (GF)</div>
                    <div className={styles.description}>Fish Mélange, Tahini Labneh, Mango Amba</div>
                    <div className={styles.item}>FIRE ROASTED EGGPLANT (V/GF)</div>
                    <div className={styles.description}>Raw Tahini, Harissa, Molasses</div>
                    <div className={styles.item}>TUKTUK KEBAB (GF)</div>
                    <div className={styles.description}>Lemongrass, Tamarind, Cauliflower Puree</div>
                    <div className={styles.button}>FULL DINNER MENU</div>
                </div>
                </div>
                <div className={styles.right}></div>
            </div>
        </>
    )
}

export default Dinner