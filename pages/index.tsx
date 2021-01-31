import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../section_views/header_section/header'
import PersonalMain from '../section_views/personal_section/personal_main'
import EducationMain from '../section_views/education_section/education_main'
import CareerMain from '../section_views/career_section/career_main'
import DeveloperMain from '../section_views/developer_section/developer_main'
import MyProjectsMain from '../section_views/my_projects_section/my_projects'
import AppColors from '../utils/colors'
import TechStackMain from '../section_views/tech_stack_section/tech_stack_main'
import CoursesMain from '../section_views/courses_section/courses_main'
import HobbiesMain from '../section_views/hobbies_section/hobbies_main'
import dynamic from 'next/dynamic'
import React from 'react'
import LanguagesMain from '../section_views/languages_section/languages_main'
import Footer from '../section_views/footer_section/footer_main'


export default function Home() {

  const Dragged = dynamic(
    () => import('../section_views/draggable_fab/draggable_fab'),
    { ssr: false },
  )

  return (
    <div className={styles.container} style={{ backgroundColor: AppColors.BG_COLOR, position: "relative" }}>
      <Head>
        <title>Levent Özkan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PersonalMain />
      <EducationMain />
      <CareerMain />
      <DeveloperMain />
      <MyProjectsMain />
      <TechStackMain />
      <CoursesMain />
      <HobbiesMain />
      <LanguagesMain />
      <Dragged />
      <Footer />


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
