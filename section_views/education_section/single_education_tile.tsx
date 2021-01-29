import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import Image from 'next/image'
import EducationModel from '../../models/education_model';

const MainDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
@media (max-width: 767px) {
   padding: 50px 0;
}
`
const TextsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-left: 15px;
`
const TitleText = styled.text`
font-size: 16px;
color: white;
font-weight: 700;
`
const YearText = styled.text`
font-size: 14px;
font-weight: 600;
color: white;
`

const SingleEducationTile = ({imageSrc = "", titleText = "", yearText = "" }) => {

    return (
        <MainDiv>
            <Image
            src={imageSrc}
            width={50}
            height={50}
            />
            <TextsContainer>
                <TitleText>
                    {titleText}
              </TitleText>
                <YearText>
                    {yearText}
              </YearText>
            </TextsContainer>
        </MainDiv>
    )
}

export default SingleEducationTile


