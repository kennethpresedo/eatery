import React from 'react'
import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.linesA}>
                    <div className={styles.linesB}>
                        <div className={styles.linesC}>
                            <div className={styles.linesD}>
                                <div className={styles.left}></div>
                                <div className={styles.right}>
                                    <div className={styles.A}>OUR MENUS</div>
                                    <div className={styles.B}></div>
                                    <div className={styles.C}>A bold & creative remixing of Mediterranean and contemporary worldwide recipes</div>
                                    <div className={styles.D}>Food and beverages are all about greeting generational recipes and the sophistication they deserve. Our menu is an ever changing hybrid art piece that relies on fresh and premium ingredients to include fish, kosher meat, produce, and spices.</div>
                                    <div className={styles.E}>OUR MENUS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu