import React from 'react'
import restaurant from '/Users/kennethpresedo/Desktop/post-grad/eatery/src/assets/restaurant4.webp'
import styles from './Home.module.scss'

function Home() {
  return (
    <>
    <div className={styles.head}>
      <img src={restaurant} alt='intro'/>
      <div className={styles.left}>left</div>
      <div className={styles.middle}>Branja<br /><span className={styles.middleB}>MIAMI</span></div>
      <div className={styles.right}>right</div>
    </div>
    </>
  )
}

export default Home

{/* <video width="max-width" height="700" playing={true} controls >
<source src={video} type="video/mp4"/>
</video> */}