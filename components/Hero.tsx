import React from "react"
import { motion } from "framer-motion"
import styles from './hero.module.css'

import { motionContainer, motionItem } from '../lib/constants'

const Hero = () => {
  return (
    <>
      <motion.div className={styles.columnLeft}  variants={motionContainer} initial='hidden' animate='show' exit='exit'>
        <motion.h1 className={styles.h1} variants={motionItem}>
          <span className={styles.fontLight}>Hi, I&apos;m</span><br/>
          <span className={styles.fontBold}>Enrique Flores.</span><br/>
        </motion.h1>
        <motion.h2 className={styles.h2} variants={motionItem}>
          <span className={`${styles.fontBold} ${styles.fontPink}`}>I love web development, <br/>UI design and music.</span><br/>
        </motion.h2>
        <motion.h3 className={styles.h4} variants={motionItem}>
          <span className={styles.fontLight}>Currently web developer at <strong>AffinityClick Inc.</strong></span>
        </motion.h3>
        <motion.div className={styles.mainBtns} variants={motionItem}>
          <a target="_blank" className={styles.btnPrimary} href='/enriqueflores_cv_2022.pdf'>
            <picture style={{ marginRight: '8px' }}>
              <img src='svg/document.svg' width={15} height={18.52} alt="Download CV" />
            </picture>
            Download CV
          </a>
          <a target="_blank" className={styles.btnSecondary} href='mailto:kikeoffline@gmail.com' rel="noreferrer">
            <picture style={{ marginRight: '8px', marginTop: '4px' }}>
              <img src='svg/mail.svg' width={20} height={19} alt="Email me" />
            </picture>
            Email me
          </a>
        </motion.div>
      </motion.div>
      <motion.div className={styles.columnRight} variants={motionContainer} initial='hidden' animate='show' exit='exit'>
        <motion.div
            variants={motionItem}
        >
          <picture>
            <img
              src="/svg/kike.svg"
              alt="Enrique Flores"
              width={490}
              height={474.91}
            />
          </picture>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;