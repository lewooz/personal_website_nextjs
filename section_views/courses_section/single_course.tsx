import styled from 'styled-components'
import React, { FC } from 'react';
import AppColors from '../../utils/colors';
import CourseModel from '../../models/course_model';
import TechLogo from '../tech_stack_section/tech_logos';
import { MdLaunch } from "react-icons/md";

const Card = styled.div`
width: 100%;
background-color: white;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
border-radius: 10px;
box-sizing: border-box;
padding: 15px;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
&:not(:last-child){
margin-bottom: 15px;
}
`
const BGIconContainer = styled.div`
position: absolute;
right: 15px;
opacity: 0.4;
z-index: 1;
top: 5px;
`
const CourseInfoContainer = styled.div`
display: flex;
flex-direction: column;
`
const CourseInfoText = styled.text<{ marginTop?: string }>`
font-size: 14px;
font-weight: 700;
color: ${AppColors.SECONDARY_COLOR};
margin-top: ${props => props.marginTop};
`
const LaunchIcon = styled.div`
position: relative;
z-index: 2;
transition: all 0.3s;
:active{
transform: scale(1.1);
}
`
const UrlLaunch = styled.a`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 5;
`

interface CourseProps {
    course: CourseModel,
}

const SingleCourse: FC<CourseProps> = ({ course }) => {

    return (
        <Card>
            <CourseInfoContainer>
                <CourseInfoText>{course.yearText}</CourseInfoText>
                <CourseInfoText
                    marginTop={"10px"}
                >{course.titleText}</CourseInfoText>
            </CourseInfoContainer>
            <LaunchIcon>
                <MdLaunch
                    color={"black"}
                    size={"25px"}
                    style={{ flexShrink: 0, cursor: "pointer" }}
                />
                <UrlLaunch
                    href={course.courseLink}
                    target="_blank"
                />
            </LaunchIcon>
            <BGIconContainer>
                <TechLogo
                    logo={course.iconType}
                    size={75}
                />
            </BGIconContainer>
        </Card>
    )
}

export default SingleCourse


