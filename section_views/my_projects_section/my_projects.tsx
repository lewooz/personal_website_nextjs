import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import { AiFillProject } from "react-icons/ai";
import AppColors from '../../utils/colors';
import SingleProject from './single_project';
import ProjectModel from '../../models/project_model';
import { BiRightArrow } from "react-icons/bi";

const MainDiv = styled.div`
padding: 50px 14.32vw;
display: flex;
flex-direction: column;
align-items: flex-start;
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
color: ${props => props.color ?? AppColors.SECONDARY_COLOR};
white-space: break-spaces;
text-align: center;
font-weight: ${props => props.color !== undefined ? 700 : 500};
`
const ExtraChildContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
position: relative;
cursor: pointer;
:hover svg{
    filter: drop-shadow(2px 2px 6px #00569E);    
}
`
const GoFlutterText = styled.text`
font-size: 24px;
color: #00569E;
font-weight: 700;
text-align: start;
transition: 0.5s all;
`
const StyledSvg = styled.svg`
transition: 0.5s all;
margin-left: 15px;
`
const StyledIcon = styled(BiRightArrow)`
transition: 0.5s all;
margin-left: 15px;
`
const FlutterWebLink = styled.a`
position: absolute;
top:0;
left: 0;
right: 0;
bottom:0;
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
                        child={idx === 0 ?
                            <>
                                <ExtraChildContainer>
                                    <GoFlutterText>
                                        Click to see Flutter version
                                    </GoFlutterText>
                                    <StyledIcon
                                        color={"#00569E"}
                                        size={25}
                                    />
                                    <StyledSvg width="50px" viewBox="0 0 256 317" version="1.1" preserveAspectRatio="xMidYMid">
                                        <defs>
                                            <linearGradient x1="3.9517088%" y1="26.9930287%" x2="75.8970734%" y2="52.9192657%" id="linearGradient-1">
                                                <stop stop-color="#000000" offset="0%"></stop>
                                                <stop stop-color="#000000" stop-opacity="0" offset="100%"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <polygon fill="#47C5FB" points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"></polygon>
                                            <polygon fill="#47C5FB" points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"></polygon>
                                            <polygon fill="#00569E" points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"></polygon>
                                            <polygon fill="#00B5F8" points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"></polygon>
                                            <polygon fill-opacity="0.8" fill="url(#linearGradient-1)" points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"></polygon>
                                        </g>
                                    </StyledSvg>
                                    <FlutterWebLink href={"https://lewo-website.web.app/#/"} target="_blank" />
                                </ExtraChildContainer>
                            </>
                            : null
                        }
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


