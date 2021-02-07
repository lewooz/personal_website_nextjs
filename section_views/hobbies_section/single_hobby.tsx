import styled from 'styled-components'
import React, { FC } from 'react';
import HobbyModel from '../../models/hobby_model';
import AppColors from '../../utils/colors';

const MainDiv = styled.div<{ image: string }>`
width: 100%;
aspect-ratio: 4/3;
position: relative;
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;                 
background-position: center center;
display: flex;
align-items: center;
justify-content: center;
`
const InfoContainer = styled.div`
max-width: 400px;
padding: 1.3vw;
backdrop-filter: blur(5px);
background-color: rgba(255,255,255,0.3);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TitleText = styled.text`
font-size: 30px;
font-weight: 700;
color: black;
text-align: center;
@media (max-width: 767px) {
   font-size: 20px;
}
`
const SubTitleText = styled.text`
font-size: 25px;
color: black;
text-align: center;
margin-top: 10px;
@media (max-width: 767px) {
  font-size: 16px;
}
`
const BottomText = styled.text`
font-size: 14px;
color: black;
text-align: center;
margin-top: 10px;
@media (max-width: 767px) {
   font-size: 12px;
}
`

interface HobbyProps {
    hobby: HobbyModel,
}

const SingleHobby: FC<HobbyProps> = ({ hobby }) => {

    return (
        <MainDiv
            image={hobby.imagePath}
        >
            <InfoContainer>
                <TitleText>{hobby.title}</TitleText>
                <SubTitleText>{hobby.subtitle}</SubTitleText>
                <BottomText>{hobby.text}</BottomText>
            </InfoContainer>
        </MainDiv>
    )
}

export default SingleHobby


