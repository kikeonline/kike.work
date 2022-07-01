import React from 'react'
import { motion } from 'framer-motion'

import CompanyType from '../types/company'
import { motionContainer, motionItem } from '../lib/constants'
import styles from './Companies.module.css'

interface CompaniesProps {
  companies: CompanyType[];
}

const Companies = ({ companies }: CompaniesProps) => {
  return (
    <motion.section className={styles.sectionCompanies} variants={motionContainer} initial='hidden' animate='show' exit='exit'>
      <motion.h2 className={styles.fontLight} variants={motionItem}>Companies that trust me</motion.h2>
      <div className={styles.companies}>
        <div className={styles.companyRow}>
          {companies.map(({ name, src, href, width, height }, index) => (
            <motion.a target="_blank" href={href} variants={motionItem} key={index}>
              <picture>
                <img src={src} width={width} height={height} alt={name} />
              </picture>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Companies;