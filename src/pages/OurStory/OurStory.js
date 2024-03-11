import React from 'react'
import styles from './OurStory.module.scss'
import { motion } from 'framer-motion';


const OurStory = () => {
  return (
    <>
      <div className={styles.container}>
      <motion.div
    whileHover={{ scale: 1,  rotateZ: 90}}
    whileTap={{
      scale: 0.8,
      rotate: -90,
      borderRadius: "100%"
    
  }} className={styles.photoIn}>
    <motion.div className={styles.inside}
      whileHover={{
        scale: 0,
        transition: { duration: .2 },
      }}
    
    ></motion.div>
  </motion.div>

      </div>
    </>
  )
}

export default OurStory