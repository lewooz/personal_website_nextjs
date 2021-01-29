import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import { MdDeveloperMode } from "react-icons/md";
import AppColors from '../../utils/colors';


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
const DevelopmentInfoContainer = styled.div`
box-sizing: border-box;
padding: 30px;
width: 100%;
background-color: #ECECE9;
display: flex;
flex-direction: column;
row-gap: 30px;
-webkit-border-radius: 20px;
-webkit-border-top-left-radius: 0;
-moz-border-radius: 20px;
-moz-border-radius-topleft: 0;
border-radius: 20px;
border-top-left-radius: 0;
`
const NormalText = styled.text`
font-size: 18px;
color: ${AppColors.SECONDARY_COLOR};
`
const BoldSpan = styled.span`
font-size: 18px;
color: #1f4988;
font-weight: 700;
`

const DeveloperMain = () => {


    return (
        <MainDiv>
            <TitleRow>
                <MdDeveloperMode
                    size={"35px"}
                    color={AppColors.SECONDARY_COLOR}
                />
                <SizedBox
                    width={"10px"}
                />
                <TitleText>Developer</TitleText>
            </TitleRow>
            <SizedBox
                height={"70px"}
            />
            <DevelopmentInfoContainer>
                <NormalText>
                    I've had a passion for programming since I was a teenager. I was always curious about how various applications was made.
                    <BoldSpan></BoldSpan>
                </NormalText>
                <NormalText>
                    {`I've worked on a couple of projects during university using `}
                    <BoldSpan>{`C++ `}</BoldSpan>
                    <NormalText>and</NormalText>
                    <BoldSpan>{` Java.`}</BoldSpan>
                </NormalText>
                <NormalText>
                    {`I developed a couple of projects while working as a ERP technical consultant.`}
                </NormalText>
                <NormalText>
                    {`I have always had the idea of improving myself as a mobile application developer.`}
                </NormalText>
                <NormalText>
                    {`I started learning `}
                    <BoldSpan>{`Android Development `}</BoldSpan>
                    <NormalText>with</NormalText>
                    <BoldSpan>{` Java `}</BoldSpan>
                    <NormalText>as a first step in mobile development.</NormalText>
                </NormalText>
                <NormalText>
                    {`I developed a `}
                    <BoldSpan>{`restaurant food ordering application `}</BoldSpan>
                    <NormalText>and an </NormalText>
                    <BoldSpan>{`application for environment monitoring systems for datacenters `}</BoldSpan>
                    <NormalText>on android.</NormalText>
                </NormalText>
                <NormalText>
                    {`I continued my mobile development learning journey with`}
                    <BoldSpan>{` IOS development `}</BoldSpan>
                    <NormalText>and started learning</NormalText>
                    <BoldSpan>{` Swift`}</BoldSpan>
                    <NormalText>.</NormalText>
                </NormalText>
                <NormalText>
                    {`I developed an`}
                    <BoldSpan>{` agenda application `}</BoldSpan>
                    <NormalText>and the same</NormalText>
                    <BoldSpan>{` application I developed for environment monitoring systems `}</BoldSpan>
                    <NormalText>using</NormalText>
                    <BoldSpan>{` swift.`}</BoldSpan>
                </NormalText>
                <NormalText>
                    {`At the start of 2019, I got into `}
                    <BoldSpan>{`Flutter(Dart), `}</BoldSpan>
                    <NormalText>which allows to write applications for IOS, Android, Web and desktop with the same code base.</NormalText>
                </NormalText>
                <NormalText>
                    {`While improving myself on`}
                    <BoldSpan>{` Flutter, `}</BoldSpan>
                    <NormalText>I developed an online product library project with</NormalText>
                    <BoldSpan>{` Neo4J `}</BoldSpan>
                    <NormalText>as database in</NormalText>
                    <BoldSpan>{` Angular Framework `}</BoldSpan>
                    <NormalText>at work.</NormalText>
                </NormalText>
                <NormalText>
                    {`I developed another product library and it's admin panel at work in`}
                    <BoldSpan>{` ReactJS `}</BoldSpan>
                    <NormalText>library with</NormalText>
                    <BoldSpan>{` Mobx `}</BoldSpan>
                    <NormalText>as state management.</NormalText>
                </NormalText>
                <NormalText>
                    {`In the meantime I had the chance to try`}
                    <BoldSpan>{` Flutter Web `}</BoldSpan>
                    <NormalText>extensively and developed a couple of projects with it.</NormalText>
                </NormalText>
                <NormalText>
                    {`Today I prefer using `}
                    <BoldSpan>{` Google Cloud Firestore `}</BoldSpan>
                    <NormalText>as the database and</NormalText>
                    <BoldSpan>{` Algolia Search `}</BoldSpan>
                    <NormalText>for complex search in my applications.</NormalText>
                </NormalText>
            </DevelopmentInfoContainer>

        </MainDiv>
    )
}

export default DeveloperMain


