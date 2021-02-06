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

  const personalRef = React.useRef(null)
  const educationRef = React.useRef(null)
  const careerRef = React.useRef(null)
  const developerRef = React.useRef(null)
  const projectsRef = React.useRef(null)
  const techStackRef = React.useRef(null)
  const coursesRef = React.useRef(null)
  const hobbiesRef = React.useRef(null)
  const languagesRef = React.useRef(null)
  const headerRef = React.useRef(null)


  const Dragged = dynamic(
    () => import('../section_views/draggable_fab/draggable_fab'),
    { ssr: false },
  )
  const onMenuItemClicked = (text) => {

    switch (text.toLowerCase()) {
      case "developer":
        scrollToView(developerRef)
        break;
      case "education":
        scrollToView(educationRef)
        break;
      case "career":
        scrollToView(careerRef)
        break;
      case "tech stack":
        scrollToView(techStackRef)
        break;
      case "courses taken":
        scrollToView(coursesRef)
        break;
      case "hobbies":
        scrollToView(hobbiesRef)
        break;
      case "languages":
        scrollToView(languagesRef)
        break;
      case "applications":
        scrollToView(projectsRef)
        break;
      case "personal info":
        scrollToView(personalRef)
        break;
      case "home":
        scrollToView(headerRef)
        break;
      default:
        break;
    }
  }

  const scrollToView = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.container} style={{ backgroundColor: AppColors.BG_COLOR, position: "relative" }}>
      <Head>
        <title>Levent Özkan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        ref={headerRef}
      >
        <Header />
      </div>
      <div
        ref={personalRef}
      >
        <PersonalMain />
      </div>
      <div
        ref={educationRef}
      >
        <EducationMain />
      </div>
      <div
        ref={careerRef}
      >
        <CareerMain />
      </div>
      <div
        ref={developerRef}
      >
        <DeveloperMain />
      </div>
      <div
        ref={projectsRef}
      >
        <MyProjectsMain />
      </div>
      <div
        ref={techStackRef}
      >
        <TechStackMain />
      </div>
      <div
        ref={coursesRef}
      >
        <CoursesMain />
      </div>
      <div
        ref={hobbiesRef}
      >
        <HobbiesMain />
      </div>
      <div
        ref={languagesRef}
      >
        <LanguagesMain />
      </div>

      <Dragged
        onmenuitemclicked={(text) => onMenuItemClicked(text)}
      />
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
