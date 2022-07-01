import React from 'react'
import styles from './Language.module.css'

interface LanguageProps {
  language: string;
}

const Language = ({ language }: LanguageProps) => {
  switch(language) {
    case 'TypeScript':
      return (
        <>
          <span className={styles.cardLanguageColor} style={{ backgroundColor: '#3178c6' }}></span>
          <span>TypeScript</span>
        </>
      )
    case 'JavaScript':
      return (
        <>
          <span className={styles.cardLanguageColor} style={{ backgroundColor: '#f1e05a' }}></span>
          <span>JavaScript</span>
        </>
      )
    case 'Ruby':
      return (
        <>
          <span className={styles.cardLanguageColor} style={{ backgroundColor: '#701516' }}></span>
          <span>Ruby</span>
        </>
      )
    case 'PHP':
      return (
        <>
          <span className={styles.cardLanguageColor} style={{ backgroundColor: '#4F5D95' }}></span>
          <span>PHP</span>
        </>
      )
    case 'Shell':
      return (
        <>
          <span className={styles.cardLanguageColor} style={{ backgroundColor: '#89e051' }}></span>
          <span>Shell</span>
        </>
      )
    default:
      return <></>;
  }
}

export default Language;