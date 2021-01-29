import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import { AiFillProject } from "react-icons/ai";
import AppColors from '../../utils/colors';
import SingleProject from './single_project';
import ProjectModel from '../../models/project_model';


const MainDiv = styled.div`
padding: 50px 14.32vw;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 80px;
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
const NoteText = styled.text`
font-size: 20px;
color: ${props=> props.color ?? AppColors.SECONDARY_COLOR};
white-space: break-spaces;
text-align: center;
font-weight: ${props => props.color!== undefined ? 700 : 500};
`

const MyProjectsMain = () => {

    let allMyProjects: Array<ProjectModel> = [
        new ProjectModel("static/images/website_screenshot.png", "Web Site", "My personal website developed in both Flutter and ReactJS."),
        new ProjectModel("static/images/pia_manti.jpg", "Pia Mantı", `The first application I developed using Android Native(Java). Has features like food-ordering, notifications etc.
        Development Year: 2019
        Github: https://github.com/lewooz/PiaManti`),
        new ProjectModel("static/images/nti.jpg", "Nti Go", `The second application I developed using Android Native(Java). The company that I was working in at that time was selling these environment monitoring products. I made this application for our customers for easy environment monitoring through mobile phones.
Development Year: 2019
Github android: https://github.com/lewooz/NtiGo
Github swift: https://github.com/lewooz/NtiGoSwift`),
        new ProjectModel("static/images/localy.png", "Localy", `An application made for local shops. A lot of features included like loyalty, ordering etc. 
Development Year: 2020
Github: https://github.com/locallyoncloud/localy-flutter`)

    ]

    return (
        <MainDiv>
            <TitleRow>
                <AiFillProject
                    size={"35px"}
                    color={AppColors.SECONDARY_COLOR}
                />
                <SizedBox
                    width={"10px"}
                />
                <TitleText>My Projects</TitleText>
            </TitleRow>
            {
                allMyProjects.map((project, idx) =>
                    <SingleProject
                        project={project}
                        isReverse={idx % 2 !== 0 ? true : false}
                    />
                )
            }
            <NoteText>
            All the web and mobile applications I made for
            <NoteText
            color={AppColors.PRIMARY_COLOR}
            >
                {` Depixen `}
            </NoteText>
            <NoteText>
                {`are in-house for now and I can not show them here. Some of these are: `}
            </NoteText>
            <NoteText
            color={AppColors.PRIMARY_COLOR}
            >
                Flutter no-code app development platform, product-library over AI, Configurator tool for architecture companies.
            </NoteText>
            </NoteText>
        </MainDiv>
    )
}

export default MyProjectsMain


