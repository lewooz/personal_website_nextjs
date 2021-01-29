import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from '../section_views/header_section/header'
import PersonalMain from '../section_views/personal_section/personal_main'
import EducationMain from '../section_views/education_section/education_main'
import CareerMain from '../section_views/career_section/career_main'
import DeveloperMain from '../section_views/developer_section/developer_main'
import MyProjectsMain from '../section_views/my_projects_section/my_projects'
import AppColors from '../utils/colors'
import TechStackMain from '../section_views/tech_stack_section/tech_stack_main'


export default function Home() {
  return (
    <div className={styles.container} style={{backgroundColor: AppColors.BG_COLOR,}}>
      <Head>
        <title>Levent Özkan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <PersonalMain/>
      <EducationMain/>
      <CareerMain/>
      <DeveloperMain/>
      <MyProjectsMain/>
      <TechStackMain/>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <style jsx global>{`
        html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins;
  }

  * {
    box-sizing: border-box;
  }
`}</style>
    </div>
  )
}
