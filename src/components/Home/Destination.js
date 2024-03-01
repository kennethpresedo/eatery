import React from 'react'
import styles from './Destination.module.scss'
import banner3 from '/Users/kennethpresedo/Desktop/post-grad/eatery/src/assets/banner3.webp'

const Destination = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.imgTwo} src={banner3} alt='dish' />
                <div className={styles.top}>
                    Trofi plays host to a home that knows when breaking bread together we do more than simply enjoy food—we also digest conversation and tradition while we savor the aesthetics of our surroundings subconsciously.<br /><br /> 
                   <span className={styles.two}>DESTINATION TROFI</span>
                </div>
                <div className={styles.bottom}>
                </div>
            </div>
        </>
    )
}

export default Destination