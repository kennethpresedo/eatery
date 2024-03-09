import React from 'react'
import styles from './Press.module.scss'
import { motion } from 'framer-motion';
import Articles from '../../components/Press/Articles';
import Footer from '../../components/Footer/Footer';

const Press = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>In The Press</div>
        <div className={styles.line}></div>
        <div className={styles.pressLineContainer}>
          <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}

            className={styles.pressLine1}>
            <div className={styles.site}></div>
            <div className={styles.quote}>"Trofi's hip-meets-hidden gem location is the perfect setting for the irreverent chef's creative Israeli and contemporary world cuisine."</div>

          </motion.div>
          <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01]
            }}

            className={styles.pressLine2}>
            <div className={styles.site}></div>
            <div className={styles.quote}>"Award-winning chef and restaurateur Kenneth Presedo is bringing his bold style and out-of-the-box recipes to the U.S."</div>

          </motion.div>
          <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}

            className={styles.pressLine3}>
            <div className={styles.site}></div>
            <div className={styles.quote}>"Located in the idyllic El Portal sanctuary, Trofi's retro, 3,000-square foot space, is as captivating as its menu."</div>
          </motion.div>
        </div>
      </div >
      <Articles />
      <Footer />
    </>
  )
}

export default Press