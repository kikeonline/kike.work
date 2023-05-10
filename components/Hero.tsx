import React from "react"
import styles from './hero.module.css'

const Hero = () => {
  return (
    <>
      <div className={styles.columnLeft}>
        <h1 className={styles.h1}>
          <span className={styles.fontLight}>Hi, I&apos;m</span><br/>
          <span className={styles.fontBold}>Enrique Flores.</span><br/>
        </h1>
        <h2 className={styles.h2}>
          <span className={`${styles.fontBold} ${styles.fontPink}`}>I love web development, <br/>UI design and music.</span><br/>
        </h2>
        <h3 className={styles.h4}>
          <span className={styles.fontLight}>Currently web developer at <strong>AffinityClick Inc.</strong></span>
        </h3>
        <div className={styles.mainBtns}>
          <a target="_blank" className={styles.btnPrimary} href='/enriqueflores_cv_2023.pdf'>
            <picture style={{ marginRight: '8px' }}>
              <img src='svg/document.svg' width={15} height={18.52} alt="Download CV" />
            </picture>
            Download CV
          </a>
          <a target="_blank" className={styles.btnSecondary} href='mailto:enrique.flores.work@gmail.com' rel="noreferrer">
            <picture style={{ marginRight: '8px', marginTop: '4px' }}>
              <img src='svg/mail.svg' width={20} height={19} alt="Email me" />
            </picture>
            Email me
          </a>
        </div>
      </div>
      <div className={styles.columnRight}>
        <div>
          <picture>
            <img
              src="/svg/kike.svg"
              alt="Enrique Flores"
              width={490}
              height={474.91}
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Hero;