import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.A}>TROFI
                    <div className={styles.Aa}>MIAMI</div>
                </div>
                <div className={styles.B}>Our Restaurant
                    <div className={styles.Ba}>MENUS</div>
                    <div className={styles.Ba}>OUR STORY</div>
                    <div className={styles.Ba}>DESTINATION</div>
                    <div className={styles.Ba}>EVENTS</div>
                    <div className={styles.Ba}>PRESS</div>
                </div>
                <div className={styles.C}>Address
                    <div className={styles.Ca} style={{ textAlign: 'center' }}>555 NE 5TH AVE<br />MIAMI SHORES, FL</div>
                    <div className={styles.Ca} style={{ textDecoration: 'underline', cursor: 'pointer' }}>GET DIRECTIONS</div>
                    <div className={styles.Ca}>(786)247-3451</div>
                </div>
                <div className={styles.D}>Hours
                    <div className={styles.Da}>WEDS 5PM-10:30PM</div>
                    <div className={styles.Da}>THURS 5PM-10:30PM</div>
                    <div className={styles.Da}>FRIDAY 5PM-11PM</div>
                    <div className={styles.Da}>SATURDAY 11AM-11PM</div>
                    <div className={styles.Da}>SUNDAY 11AM-10PM</div>
                    <div className={styles.Da}>MON-TUES CLOSED</div>
                </div>
                <div className={styles.E}>Join our Mailing List
                    <div className={styles.Ea}>
                        <form className={styles.form} style={{color: '#fff'}}>
                            <input className={styles.input} type="text" placeholder='EMAIL' />
                        </form>
                    </div>
                    <div className={styles.Eb}>SUBSCRIBE</div>
                </div>
            </div>
        </>
    )
}

export default Footer