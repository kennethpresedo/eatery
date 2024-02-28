import React from 'react'
import styles from './Destination.module.scss'
import medite from '/Users/kennethpresedo/Desktop/post-grad/eatery/src/assets/medite.jpg'

const Destination = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.imgTwo} src={medite} alt='dish' />
                <div className={styles.top}>
                    Branja plays host to a home that knows when breaking bread together we do more than simply enjoy food—we also digest conversation and tradition while we savor the aesthetics of our surroundings subconsciously.<br /><br /> 
                   <span className={styles.two}>DESTINATION BRANJA</span>
                </div>
                <div className={styles.bottom}>
                </div>
            </div>
        </>
    )
}

export default Destination