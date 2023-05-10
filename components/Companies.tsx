import React from 'react'
import CompanyType from '../types/company'
import styles from './Companies.module.css'

interface CompaniesProps {
  companies: CompanyType[];
}

const Companies = ({ companies }: CompaniesProps) => {
  return (
    <section className={styles.sectionCompanies}>
      <h2 className={styles.fontLight}>Companies that trust me</h2>
      <div className={styles.companies}>
        <div className={styles.companyRow}>
          {companies.map(({ name, src, href, width, height }, index) => (
            <a target="_blank" href={href} key={index} rel="noreferrer">
              <picture>
                <img src={src} width={width} height={height} alt={name} />
              </picture>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies;