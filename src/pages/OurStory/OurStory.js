import React from 'react'
import styles from './OurStory.module.scss'
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer'


const OurStory = () => {
  return (
    <>
        <div className={styles.header}>
        <div className={styles.ourStory}>OUR STORY</div>
        <div className={styles.toMiami}>Mediterranean in Miami</div>
        </div>
        <div className={styles.break}></div>
      <div className={styles.container}>
        <div className={styles.topContent}>
        <div className={styles.greeting}>CHEERS, YASSAS, ¡SALUD!</div>
        <div className={styles.line}></div>
        <div className={styles.flavors}>Bringing regional Mediterranean flavors with eclectic global palates</div>
        <div className={styles.text}>At Trofi, predictability and stuffiness are replaced by a heightened sense of excitement and authenticity. All will feel immediately at home and our ongoing attention to detail transports visitors to different flavors of time and space.</div>
        </div>
        <div className={styles.lowerContent}>

  <a  className={styles.link} href="https://localhost:3000/menu" target="_blank" rel="noreferrer">
      <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }} className={styles.photoIn}>EAT
  </motion.div></a>
  <a  className={styles.link} href="https://localhost:3000/menu" target="_blank" rel="noreferrer">

  <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }} className={styles.photoIn2}>DRINK
  </motion.div></a>
  <a  className={styles.link} href="https://localhost:3000/menu" target="_blank" rel="noreferrer">
  <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }} className={styles.photoIn3}>RELAX
  </motion.div></a>
  <a  className={styles.link} href="https://localhost:3000/menu" target="_blank" rel="noreferrer">
  <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }}  className={styles.photoIn4}>
    AMBIANCE
  </motion.div></a>
</div>
      </div>
      <Footer />
    </>
  )
}

export default OurStory