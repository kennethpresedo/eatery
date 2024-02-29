import React from 'react'
import styles from './Chef.module.scss'

const Chef = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <div className={styles.A}>THE CHEF</div>
                <div className={styles.B}></div>
                <div className={styles.C}>Meet Masterchef Kenneth Presedo</div>
                <div className={styles.D}>Irreverent, visionary, bold and a total flavor rebel, Chef K. Presedo has become the Israeli sensation of the international culinary community through a combination of grit, imagination and killer instincts in the kitchen.</div>
                <div className={styles.E}>The ever-creative Presedo brings to life fresh and unparalleled concepts using simple yet elevated ingredients, whipping up a mélange of his native regional dishes with flavors and techniques informed by his world travels and his limitless imagination.</div>
                <div className={styles.F}>LEARN MORE</div>
            </div>
        </div>
    </>
  )
}

export default Chef