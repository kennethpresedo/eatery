import React from 'react'
import styles from './HappyHour.module.scss'

const HappyHour = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.listing}>
                    <div className={styles.wordColoum}>
                        <div className={styles.title}>Happy Hour Menu</div>
                        <div className={styles.hours}>
                            <div className={styles.listHours}>HOURS: 5–8PM AT THE BAR (EXCLUDES SATURDAY)</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.featured}>Happy Hour Drinks</div>
                        <div className={styles.item}>COCKTAILS - $10</div>
                        <div className={styles.description}>Rotating selection weekly</div>
                        <div className={styles.item}>WINE - $9</div>
                        <div className={styles.description}>Rotating selection weekly</div>
                        <div className={styles.item}>BEER - $9</div>
                        <div className={styles.description}>Monopolio Negra, Monopolio Clara</div>
                        <div className={styles.buttonDiv}>
                            <div className={styles.button}>FULL HAPPY HOUR MENU</div>
                        </div>
                    </div>
                </div>
                <div className={styles.photo}></div>
            </div>
        </>
    )
}

export default HappyHour