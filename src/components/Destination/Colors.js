import React from 'react'
import styles from './Colors.module.scss'
import glass from '../../assets/glass.webp'

const Colors = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.colorsBackground} src={glass} alt='glass'/>
                <div className={styles.textBox}>
                    <div className={styles.text}>
                    Beneath a kaleidoscope of colors casting a warm shade from the stained-glass ceiling, upcycled 1970’s original cutlery and pastel ceramics set the scene to an ensemble of sensual cultural notes coming together in melody.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Colors