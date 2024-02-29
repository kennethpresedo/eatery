import React from 'react'
import restaurant from '/Users/kennethpresedo/Desktop/post-grad/eatery/src/assets/restaurant4.webp'
import styles from './Home.module.scss'
import About from '/Users/kennethpresedo/Desktop/post-grad/eatery/src/components/Home/About.js'
import Menu from '/Users/kennethpresedo/Desktop/post-grad/eatery/src/components/Home/Menu.js'
import Reservations from '../../components/Home/Reservations'
import Destination from '../../components/Home/Destination'
import Chef from '../../components/Home/Chef'

function Home() {
  return (
    <>
    <div className={styles.head}>
      <img className={styles.imgOne} src={restaurant} alt='intro'/>
      <div className={styles.left}>left</div>
      <div className={styles.middle}>Branja<br /><span className={styles.middleB}>MIAMI</span></div>
      <div className={styles.right}>right</div>
    </div>
    <About />
    <Menu />
    <Reservations />
    <Destination />
    <Chef />
    </>
  )
}

export default Home
