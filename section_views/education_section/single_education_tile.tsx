import styled from 'styled-components'
import React from 'react';

const MainDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 20px;
@media (max-width: 767px) {
   padding: 20px 0;
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

const SingleEducationTile = ({ imageSrc = "", titleText = "", yearText = "" }) => {

    return (
        <MainDiv>
            <img
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


