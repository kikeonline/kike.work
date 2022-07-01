import { FC } from 'react'
import Head from 'next/head'
import { Octokit } from 'octokit'

// Fetch data
import { getDevs, getCompanies } from '../lib/api'

// Components
import Hero from '../components/Hero'
import Repos from '../components/Repos'
import Devs from '../components/Devs'
import Companies from '../components/Companies'

// Types
import RepoType from '../types/repo'
import DevType from '../types/dev'
import CompanyType from '../types/company'

// Styles
import styles from '../styles/Home.module.css'

type HomeProp = {
  repos: RepoType[]
  devs: DevType[]
  companies: CompanyType[]
}

const Home: FC<HomeProp> = ({ repos, devs, companies }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>kike.work</title>
      </Head>

      <nav>
        <div>
          <picture>
            <img src='/favicon.png' width={25} height={26.92} alt="kike.work" style={{ marginRight: '8px' }} />
          </picture>
        </div>
        <h4 className={styles.fontLight}>kike.work</h4>
      </nav>

      <main>
        <Hero/>
      </main>

      <section style={{ marginTop: '60px' }}>
        <Repos repos={repos} />
      </section>

      <section style={{ marginTop: '60px' }}>
        <Devs devs={devs} />
      </section>

      <section style={{ marginTop: '60px' }}>
        <Companies companies={companies} />
      </section>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const octokit = new Octokit()
  const devs = getDevs()
  const companies = getCompanies()
  const username = (process.env.GITHUB_USERNAME as string)

  const githubReponse = await octokit.request('GET /users/{username}/repos', {
    username: username, // Your github username
    type: 'owner',
    sort: 'created',
  })

  const repos = githubReponse.data;

  return {
    props: {
      repos,
      devs,
      companies
    },
    revalidate: false,
  }
}