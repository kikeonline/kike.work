import React, { useRef } from "react";
import { motion } from "framer-motion"
import styles from './devs.module.css'

import { motionContainer, motionItem } from '../lib/constants'
import DevType from "../types/dev";

interface DevsProps {
  devs: DevType[];
}

const Devs = ({ devs }: DevsProps) => {
  return (
    <motion.div variants={motionContainer} initial='hidden' animate='show' exit='exit'>
      <motion.h2 className={styles.fontLight} variants={motionItem}>Awesome developers</motion.h2>
      <motion.ul className={styles.ul}>

        {devs.map(({ name, profesion, link }, index) => {
          return (
            <motion.li key={index} className={styles.cardContainer} variants={motionItem}>
              <a className={styles.a} href={link} target="_blank" rel="noreferrer">
                <div className={styles.card}>
                  <span className={styles.cardNameContainer}>
                    <svg style={{ fill: 'rgb(87, 96, 106)', marginRight: '10px' }} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                    </svg>
                    <span className={styles.cardName}>{name}</span>
                  </span>
                  <p className={styles.cardDescripcion}>{profesion}</p>
                </div>
              </a>
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Devs;