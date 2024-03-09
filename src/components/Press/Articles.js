import React from 'react'
import styles from './Articles.module.scss'

const Articles = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.contents}>

                    <div className={styles.blank}></div>

                    <div className={styles.row}>
                        <div className={styles.article}>
                            <a className={styles.articleLink} href="https://miami.eater.com/maps/best-new-restaurants-miami-heatmap" target="_blank" rel="noreferrer">
                                <div className={styles.clip1}></div></a>
                            <div className={styles.date}>APRIL 7, 2024</div>
                            <div className={styles.blurb}>
                            <a className={styles.articleLink} href="https://miami.eater.com/maps/best-new-restaurants-miami-heatmap" target="_blank" rel="noreferrer">
                                Miami Food Events This Weekend: Adult Easter Egg Hunt, Blowfish Extravaganza, & Easter Brunch Guide</a></div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip2}></div>
                            <div className={styles.date}>APRIL 1, 2024</div>
                            <div className={styles.blurb}>Top Miami Restaurants in April 2024</div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip3}></div>
                            <div className={styles.date}>MARCH 27, 2024</div>
                            <div className={styles.blurb}>Where to Eat in Miami This Week [March 20-26]</div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip4}></div>
                            <div className={styles.date}>MARCH 26, 2024</div>
                            <div className={styles.blurb}>Trofi: el nuevo restaurante en Miami, del creador de Masterchef Argentino</div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.article}>
                            <div className={styles.clip5}></div>
                            <div className={styles.date}>MARCH 3, 2024</div>
                            <div className={styles.blurb}>Celebrate Purim With Fun And Inventive Hamantaschen Variations</div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip6}></div>
                            <div className={styles.date}>MARCH 2, 2024</div>
                            <div className={styles.blurb}>The Hottest New Restaurants in Miami, March 2024</div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip7}></div>
                            <div className={styles.date}>FEBRUARY 5, 2024</div>
                            <div className={styles.blurb}>MasterChef Makes US Debut With Retro Concept in Buena Vista</div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip8}></div>
                            <div className={styles.date}>FEBRUARY 3, 2024</div>
                            <div className={styles.blurb}>MasterChef Kenneth Presedo Makes US Debut With Trofi, Retro Concept in Miami </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.article}>
                            <div className={styles.clip9}></div>
                            <div className={styles.date}>FEBRUARY 2, 2024</div>
                            <div className={styles.blurb}>This ’70s aesthetic wonderland serves edgy Israeli in El Portal</div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip10}></div>
                            <div className={styles.date}>FEBRUARY 2, 2024</div>
                            <div className={styles.blurb}>Masterchef Winner Kenneth Presedo Brings his Inaugural U.S. Concept to Miami’s Upper Buena Vista</div>
                        </div>
                        <div className={styles.article}>
                            <div className={styles.clip11}></div>
                            <div className={styles.date}>JANUARY 23, 2024</div>
                            <div className={styles.blurb}>Kenneth Presedo to Open Highly Anticipated U.S. Restaurant on February 7 in Miami</div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Articles