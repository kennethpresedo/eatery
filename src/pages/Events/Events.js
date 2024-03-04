import React from 'react'
import {useEffect} from 'react'
import styles from './Events.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer'
const Events = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
    <>
      <div className={styles.containerA}>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: 1}}
        className={styles.left}>
          <div className={styles.contentLeft}>
            <div className={styles.header}>Elevate your private event at Trofi</div>
            <div className={styles.line}></div>
            <div className={styles.text}>Trofi is available for private and semi-private events. The property features a large outdoor patio and bar, a secluded private loft on the 2nd floor and an Omakase Chefs Table.</div>
            <div className={styles.text}>Trofi: your ideal venue for Corporate and Social events, accommodating anywhere from 9 to 200 guests.</div>
            <div className={styles.text}>From birthday to Bar Mitzvah, Bris to bridal showers, corporate destinations, and everything in between, our venue is your perfect place for memorable celebrations, gatherings, and meetings!</div>
          </div>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1}}
        className={styles.right}>
          <div className={styles.contentRight}>
            <div className={styles.line1}>
              <div className={styles.nameFirst}>First Name
                <form className={styles.form}>
                  <input className={styles.input} type="text" placeholder='' />
                </form>
              </div>
              <div className={styles.nameLast}>Late Name
                <form className={styles.form}>
                  <input className={styles.input} type="text" placeholder='' />
                </form></div>
            </div>
            <div className={styles.line2}>
              <div className={styles.email}>Email
                <form className={styles.form}>
                  <input className={styles.input} type="text" placeholder='' />
                </form></div>
              <div className={styles.phone}>Phone
                <form className={styles.form}>
                  <input className={styles.input} type="text" placeholder='' />
                </form></div>
            </div>
            <div className={styles.line3}>
              <div className={styles.date}>Event Date
                <form className={styles.form}>
                  <input className={styles.input} type="text" placeholder='' />
                </form></div>
              <div className={styles.time}>Event Time
                <form className={styles.form}>
                  <input className={styles.input} type="text" placeholder='' />
                </form></div>
            </div>
            <div className={styles.line4}>
              <div className={styles.private}>Is This a Private Event
                <select className={styles.select}>
                  <option className={styles.option} value="0">No</option>
                  <option className={styles.option} value="1">Yes</option>
                </select>
            
                </div>
              <div className={styles.guests}>Number of Guests
                <select className={styles.select}>
                  <option className={styles.option} value="0">10-25</option>
                  <option className={styles.option} value="1">26-50</option>
                  <option className={styles.option} value="2">51-75</option>
                  <option className={styles.option} value="3">76-100</option>
                  <option className={styles.option} value="4">101-125</option>
                  <option className={styles.option} value="5">125+</option>
                </select></div>
            </div>
            <div className={styles.type}>Event Type
              <form className={styles.form}>
                <input className={styles.input} type="text" placeholder='' />
              </form></div>
            <div className={styles.notes}>Notes
              <form className={styles.formNotes}>
                <input className={styles.input} type="text" placeholder='' />
              </form></div><br />
            <div className={styles.button}>SUBMIT</div>
          </div>
        </motion.div>
      </div>

      <div className={styles.containerB} data-aos="fade-up">
        <div className={styles.leftB}>
          <div className={styles.leftContentsB}>Our Event Spaces</div>
        </div>
        <div className={styles.rightB}>
          <div className={styles.rightContentsLineDiv}>
            <div className={styles.rightContentsLine}></div>
          </div>
          <div className={styles.rightContentsB}>
            <div className={styles.centerRow}>
              <div className={styles.location}>TROFI CHEFS TABLE</div>
              <div className={styles.specs}>Seats up to 14 guests</div>
              <div className={styles.specs}>Cocktail Reception up to 25</div>
            </div>
            <div className={styles.centerRow}>
              <div className={styles.location}>TROFI CATHEDRAL TERRACE</div>
              <div className={styles.specs}>Seats up to 180 guests</div>
              <div className={styles.specs}>Cocktail Reception up to 200</div>
            </div>
            <div className={styles.centerRow}>
              <div className={styles.location}>GARDEN PATIO</div>
              <div className={styles.specs}>Seats up to 30 guests</div>
              <div className={styles.specs}>Cocktail Reception up to 50</div>
            </div>
          </div>
          <div className={styles.rightContentsC}>*Also, inquire about our sister venues at Upper Buena Vista</div>
        </div>
      </div>
      <div className={styles.containerC}></div>
      <Footer />
    </>
  )
}

export default Events