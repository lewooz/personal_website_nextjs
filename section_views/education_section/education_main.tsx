import styled from 'styled-components'
import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import SizedBox from '../../components/sized_box';
import SingleEducationTile from './single_education_tile';
import EducationModel from '../../models/education_model';

const MainDiv = styled.div`
background-color:#88A5F3;
padding: 50px 14.32vw;
display: flex;
flex-direction: column;
align-items: flex-start;
@media (max-width: 767px) {
    padding: 50px 3vw;
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
color: white;
`

const EducationMain = () => {

    let educationModels: Array<EducationModel> = [
        new EducationModel("/static/images/isik_logo.png", "F.M.V. Işık Üniversitesi - Faculty of Engineering - Computer Engineering", "2006 - 2011"),
        new EducationModel("/static/images/sisli_terakki_logo.png", "T.V.O. Özel Şişli Terakki Lisesi", "2003 - 2006"),
        new EducationModel("/static/images/eyuboglu_logo.png", "Özel Eyüboğlu Koleji", "1998 - 2003"),
        new EducationModel("/static/images/turan_logo.png", "Suadiye Mediha Tansel İlköğretim Okulu", "1995 - 1998"),
    ]

    return (
        <MainDiv>
            <TitleRow>
                <FaGraduationCap
                    size={"35px"}
                    color={"white"}
                />
                <SizedBox
                    width={"10px"}
                />
                <TitleText>Education</TitleText>
            </TitleRow>
            <SizedBox
                height={"50px"}
            />
            {
                educationModels.map((educationModel) =>
                    <SingleEducationTile
                        imageSrc={educationModel.educationImage}
                        titleText={educationModel.educationTitle}
                        yearText={educationModel.educationYear}
                    />
                )
            }

        </MainDiv>
    )
}

export default EducationMain


