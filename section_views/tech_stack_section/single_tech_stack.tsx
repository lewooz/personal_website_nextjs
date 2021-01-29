import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import AppColors from '../../utils/colors';
import TechLogo from '../../section_views/tech_stack_section/tech_logos'

const MainDiv = styled.div`
width: 137px;
height: 137px;
border-radius: 25px;
background: radial-gradient(#fff 20%,#E6E4E4); 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TechText = styled.text`
font-size: 14px;
color: black;
font-weight: 700;
max-width: 120px;
text-align: center;
`


const SingleTechStack = ({ text }) => {

    return (
        <MainDiv>
            <TechLogo
                logo={text}
            />
            <TechText>
                {text}
            </TechText>
        </MainDiv>

    )
}

export default SingleTechStack


