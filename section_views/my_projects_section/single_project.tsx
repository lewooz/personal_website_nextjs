import styled from 'styled-components'
import React, { FC } from 'react';
import AppColors from '../../utils/colors';
import ProjectModel from '../../models/project_model';


const MainDiv = styled.div`
width: 100%;
display: flex;
flex-direction: ${props => props.direction};
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 0 50px;

`
const ImageContainer = styled.div`
width: 400px;
box-sizing: border-box;
padding-bottom: 70px;
display: flex;
flex-direction: row;
`
const ImageInfoContainer = styled.div`
width: 500px;
display: flex;
flex-direction: column;
row-gap: 10px;
`
const TitleText = styled.text`
font-size: 24px;
color: ${AppColors.PRIMARY_COLOR};
font-weight: 700;
text-align: ${props => props.align};
`
const ContentText = styled.text`
font-size: 20px;
color: ${AppColors.SECONDARY_COLOR};
text-align: ${props => props.align};
white-space: break-spaces;
`
const StyledImage = styled.img`
max-height: 600px;
object-fit: contain;
`


interface ProjectProps {
    project: ProjectModel,
    isReverse: Boolean,
    child: React.ReactElement
}

const SingleProject: FC<ProjectProps> = ({ project, isReverse = false, child }) => {

    return (
        <MainDiv
            direction={isReverse ? "row-reverse" : "row"}
        >
            <ImageContainer>
                <StyledImage
                    src={project.imageLink}
                    width={400}
                />
            </ImageContainer>
            <ImageInfoContainer>
                <TitleText
                    align={isReverse ? "end" : "start"}
                >
                    {project.titleText}
                </TitleText>
                <ContentText
                    align={isReverse ? "end" : "start"}
                >
                    {project.contentText}
                </ContentText>
                {child ?? null}
            </ImageInfoContainer>
        </MainDiv>
    )
}

export default SingleProject


