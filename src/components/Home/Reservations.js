import React from 'react'
import styles from './Reservations.module.scss'

const Reservations = () => {
    return (
        <>
            <div className={styles.whole}>
                <div className={styles.top}>
                    Break Bread with Us
                    <div className={styles.line}></div>
                </div>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.A}>Dinner Reservations</div>
                        <div className={styles.B}>WEDS-THURS 5PM-10:30PM</div>
                        <div className={styles.C}>FRIDAY-SATURDAY 5PM-11PM</div>
                        <div className={styles.D}>SUNDAY 5PM-10PM</div>
                        <div className={styles.E}>BOOK A TABLE</div>
                        <div className={styles.F}>
                            Get an up-close view on the fireworks at the kitchen counter or casually dine in the open-air Cathedral. Dress Code: Smart nostalgia & 1970’s welcome!</div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.a}>Join us for Brunch!</div>
                        <div className={styles.b}>SATURDAY & SUNDAY 11AM–5PM</div>
                        <div className={styles.c}>BOOK A TABLE</div>
                        <div className={styles.d}>Join us every Saturday and Sunday on our open air terrace for Brunch.</div>
                        <div className={styles.e}>*We kindly ask you to arrive on time. Seats are time limited. Dress Code: Smart nostalgia & 1970’s welcome!</div>
                    </div>
                </div>
            </div>
            <div className={styles.lineBox}>
                <div className={styles.lineA}></div>
                <div className={styles.lineB}></div>
                <div className={styles.lineC}></div>
                <div className={styles.lineD}></div>
            </div>
        </>
    )
}

export default Reservations