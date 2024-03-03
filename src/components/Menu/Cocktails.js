import React from 'react'
import styles from './Cocktails.module.scss'

const Cocktails = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.listing}>
                    <div className={styles.wordColoum}>
                    <div className={styles.title}>Signature Cocktails</div>
                    <div className={styles.line}></div>
                    <div className={styles.featured}>Featured Drinks</div>
                    <div className={styles.item}>CORPSE REVIVER #23</div>
                    <div className={styles.description}>Gin, Dry Curacao, Lillet, Lemon, Arak</div>
                    <div className={styles.item}>SAZERARAK</div>
                    <div className={styles.description}>Applewood Rye, Bitters, Arak</div>
                    <div className={styles.item}>PURPLE RAIN</div>
                    <div className={styles.description}>Tequila, Lime, Butterfly Pea, Zatar</div>
                    <div className={styles.buttonDiv}>
                    <div className={styles.button}>FULL COCKTAIL MENU</div>
                    <div className={styles.button}>FULL WINE MENU</div>
                    </div>
                </div>
                </div>
                <div className={styles.photo}></div>
            </div>
        </>
    )
}

export default Cocktails