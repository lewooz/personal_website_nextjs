import styled from 'styled-components'
import React from 'react';

import { MdLanguage } from "react-icons/md";
import AppColors from '../../utils/colors';
import SizedBox from '../../components/sized_box';

const MainDiv = styled.div`
width: 100%;
padding: 50px 14.32vw;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 767px) {
    padding: 50px 0;  
}
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
const LanguagesRow = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`
const LanguageColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 230px;
`
const LanguageImg = styled.img`
width: 100%;
`
const LanguageText = styled.text`
font-size: 22px;
font-weight: 600;
color: ${AppColors.SECONDARY_COLOR};
`

const LanguagesMain = () => {

    return (
        <MainDiv>
            <TitleRow>
                <MdLanguage
                    size={"35px"}
                    color={AppColors.SECONDARY_COLOR}
                />
                <SizedBox
                    width={"10px"}
                />
                <TitleText>Languages I Speak</TitleText>
            </TitleRow>
            <SizedBox
                height={"30px"}
            />
            <LanguagesRow>
                <LanguageColumn>
                    <LanguageImg
                        src={"/static/images/tr_flag.png"}
                    />
                    <SizedBox
                        height={"5px"}
                    />
                    <LanguageText>Turkish</LanguageText>
                </LanguageColumn>
                <LanguageColumn>
                    <LanguageImg
                        src={"/static/images/england_flag.png"}
                    />
                    <SizedBox
                        height={"5px"}
                    />
                    <LanguageText>English</LanguageText>
                </LanguageColumn>
            </LanguagesRow>
        </MainDiv>
    )
}

export default LanguagesMain


