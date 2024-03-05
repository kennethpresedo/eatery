import React from 'react'
import styles from './DineIn.module.scss'

const DineIn = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.leftContent}></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightContent}>
                        <div className={styles.head}>MIAMI, FL</div>
                        <div className={styles.line}></div>
                        <div className={styles.title}>Dine in our open air terrace nestled in the bohemian oasis of Upper Buena Vista</div>
                        <div className={styles.text}>An escape from the bustle of a burgeoning city. A bohemian oasis where authenticity is freshly brewed with each cup of coffee. An open space mall where curious discovery meets thoughtful craftsmanship.</div>
                        <div className={styles.text}>Relax, breathe, and re-charge beneath the bows of a magical bodhi tree. Find connection to nature and your own mindful place. The seeds planted here you will take with you wherever you go. </div>
                        <div className={styles.button}>GET DIRECTIONS</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DineIn