import React from 'react'
import styles from './OurStory.module.scss'
import { motion } from 'framer-motion';


const OurStory = () => {
  return (
    <>
      <div className={styles.container}>
      <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }} className={styles.photoIn}>EAT
  </motion.div>
  <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }} className={styles.photoIn2}>DRINK
  </motion.div>
  <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }} className={styles.photoIn3}>RELAX
  </motion.div>
  <a href="https://localhost:3000/menu" target="_blank" rel="noreferrer">
  <motion.div
    whileHover={{ scale: 1, borderRadius: "100%"}}
    whileTap={{
      rotate: 360,
      scale: 0.5
    
  }}  className={styles.photoIn4}>
    AMBIANCE
  </motion.div></a>

      </div>
    </>
  )
}

export default OurStory