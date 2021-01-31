import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import { VscBroadcast } from "react-icons/vsc";
import AppColors from '../../utils/colors';
import CourseModel from '../../models/course_model';
import SingleCourse from './single_course';


const MainDiv = styled.div`
padding: 50px 14.32vw;
display: flex;
flex-direction: column;
align-items: flex-start;
row-gap: 15px;
`
const TitleRow = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const TitleText = styled.text`
font-size: 30px;
font-weight: 700;
color: ${AppColors.SECONDARY_COLOR};
`


const CoursesMain = () => {

    let coursesList: Array<CourseModel> = [
        new CourseModel("2019", "Android Mobil Uygulama Kursu: Kotlin & Java", "https://www.udemy.com/course/android-o-mobil-uygulama-dersi-kotlin-java/", "android"),
        new CourseModel("2019", "Android Mobil Uygulama İleri Seviye", "https://www.udemy.com/course/android-mobil-uygulama-kursu-seviye-2/", "android"),
        new CourseModel("2019", "The Complete RxJava 2 For Andrpid Development Masterclass", "https://www.udemy.com/course/rxjavarxandroid-bootcamp-reactivex-for-android-developers/", "android"),
        new CourseModel("2019", "iOS 14 & Swift 5: Başlangıçtan İleri Seviyeye Mobil Uygulama", "https://www.udemy.com/course/ios-gelistirme-kursu/", "swift(ios)"),
        new CourseModel("2020", "Sıfırdan Flutter ile Android ve Ios Apps Development", "https://www.udemy.com/course/sifirdan-flutter-ile-android-ve-ios-apps-development/", "flutternotext"),
        new CourseModel("2020", "React - The Complete Guide (incl Hooks, React Router, Redux)", "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", "reactjs"),
    ]

    return (
        <MainDiv>
            <TitleRow>
                <VscBroadcast
                    size={"35px"}
                    color={AppColors.SECONDARY_COLOR}
                />
                <SizedBox
                    width={"10px"}
                />
                <TitleText>Courses Taken</TitleText>
            </TitleRow>
            <SizedBox
                height={"50px"}
            />
            {
                coursesList.map((course) =>
                    <SingleCourse
                        course={course}
                    />
                )
            }

        </MainDiv>
    )
}

export default CoursesMain


