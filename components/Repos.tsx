import React, { useRef } from "react";
import { motion } from "framer-motion"
import styles from './repos.module.css'

import RepoType from "../types/repo";
import useDraggableScroll from 'use-draggable-scroll';
import { motionContainer, motionItem } from '../lib/constants'
import Language from "./Language";

interface ReposProps {
  repos: RepoType[];
}

const Repos = ({ repos }: ReposProps) => {

  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });

  return (
    <motion.div onMouseDown={onMouseDown} variants={motionContainer} initial='hidden' animate='show' exit='exit'>
      <motion.h2 className={styles.fontLight} variants={motionItem}>
        <a href="https://github.com/kikeonline" target="_blank" style={{textDecoration: 'none'}} className={styles.link} rel="noreferrer">
          My Github
          <picture>
            <svg style={{ fill: 'rgb(87, 96, 106)', marginLeft: '10px' }} aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </picture>
        </a>
      </motion.h2>
      <motion.ul className={styles.ul} ref={ref} variants={motionItem}>

        {repos.map(({ id, name, description, language, fork }) => {
          // Forked repos are not shown
          if (fork === false) {
            return (
              <motion.li key={id} className={styles.cardContainer} variants={motionItem}>
                <div className={styles.card}>
                  <span className={styles.cardNameContainer}>
                    <svg className={styles.cardIcon} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                      <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    <span className={styles.cardName}>{name}</span>
                  </span>
                  <p className={styles.cardDescripcion}>{description}</p>
                  <span className={styles.cardLanguageText}>
                    <Language language={language} />
                  </span>
                </div>
              </motion.li>
            )
          }

        })}
      </motion.ul>
    </motion.div>
  );
};

export default Repos;