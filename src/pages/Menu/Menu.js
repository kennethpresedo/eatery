import React from 'react'
import styles from './Menu.module.scss'
import Footer from '../../components/Footer/Footer'
import Dinner from '../../components/Menu/Dinner'
import Brunch from '../../components/Menu/Brunch'
import Cocktails from '../../components/Menu/Cocktails'
import Drinks from '../../components/Menu/Drinks'
import HappyHour from '../../components/Menu/HappyHour'
import Sweets from '../../components/Menu/Sweets'

export const Menu = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.left}>left</div>
          <div className={styles.middle}>OUR MENUS<br /><span className={styles.middleB}>Indulge and Savor</span></div>
          <div className={styles.right}>right</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.menuLinks}>
            <div className={styles.dinner}>
              DINNER MENU
            </div>
            <div className={styles.brunch}>
              BRUNCH MENU
            </div>
            <div className={styles.cocktails}>
              COCKTAILS
            </div>
            <div className={styles.drinks}>
              AFTER DINNER DRINKS
            </div>
            <div className={styles.happyHour}>
              HAPPY HOUR
            </div>
            <div className={styles.sweets}>
              SWEETS
            </div>
          </div>
          <div className={styles.disclaimer}>All menus are subject to change based on availability and seasonality.</div>
        </div>
      </div>
      <Dinner />
      <Brunch />
      <Cocktails />
      <Drinks />
      <HappyHour />
      <Sweets />
      <Footer />
    </>
  )
}

export default Menu