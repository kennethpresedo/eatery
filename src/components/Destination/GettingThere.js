import React from 'react'
import styles from './GettingThere.module.scss'

const GettingThere = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.right}>
                    <div className={styles.rightContent}>
                        <div className={styles.head}>GETTING THERE</div>
                        <div className={styles.line}></div>
                        <div className={styles.title}>Tucked away in El Portal’s lush sanctuary</div>
                        <div className={styles.text}>555 NE 5TH AVE MIAMI SHORES, FL</div>
                        <div className={styles.textB}>Valet parking available. Uber/Lyft recommended. Street parking is limited</div>
                        <div className={styles.button}>GET DIRECTIONS</div>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.leftContent}></div>
                </div>
            </div>
        </>
    )
}

export default GettingThere