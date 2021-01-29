import styled from 'styled-components'
import React from 'react';
import { AiFillSetting } from "react-icons/ai";
import SizedBox from '../../components/sized_box';
import SingleCareer from './single_career';
import CareerModel from '../../models/career_model';

const MainDiv = styled.div`
background-color: #5B74B8;
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
color: white;
`

const CareerMain = () => {

    let careerModels : Array<CareerModel> = [
        new CareerModel("2019 - present","Mobile / Web Application Developer","Depixen, Ataşehir/Istanbul",
        [
            "Developing global web and mobile applications using the most recent technologies.",
            "Designing and architecting the frontend according to the database and backend technologies being used like Neo4J, firestore as database and flask(python) as backend service.",
            "Creating unique widgets/components on both Flutter framework and React library depending on the prototypes made by the design team.(No premade UI library usage)",
            "Leading a group of interns on their way to becoming an expert developer.",
            "Worked in developing a no-code development platform project on flutter"
        ]),
        new CareerModel("2016-2019","Sales Engineer","CTS Bilişim, Maltepe/Istanbul",
        [
            "Making researches; marketing exercises; creating dealer network; organizing timed dealer visitings to widen customer portfolio.",
            "Arranging meetings, preparing reports, make offers and presentations as part of sales work.",
            "To realize sales and customer satisfaction objectives.",
            "Carrying out the coordination between the company and the customer, document management.",
            "Making required researches about other contenders and their products in the market.",
            "Preparing offers depending on customer demands and following up the process after that."
        ]),
        new CareerModel("2013-2014","ERP JD Edwards Technical Consultant (Outsource)","Eczacıbaşı Baxter, Şişli/Istanbul",
        []),
        new CareerModel("2013-2014","ERP JD Edwards Technical Consultant","Apps Akademi, Kozyatağı/Istanbul",
        [
            "Taking active role at managing ERP modules.",
            "Giving technical support and training to users.",
            "Solving ERP problems of the users.",
            "Giving technical support for all the applications that the company is using.",
            "Taking part in the development stages of projects which mostly consists of database operations.",
        ]),
        new CareerModel("2009","Oracle Hyperion and Java Intern","ING Bank, Maslak/Istanbul",
        []),
        new CareerModel("2008","Hardware Intern","Sandoz İlaç, Maslak/Istanbul",
        []),
    ]

    return (
        <MainDiv>
           <TitleRow>
                <AiFillSetting
                    size={"35px"}
                    color={"white"}
                />
                <SizedBox
                    width={"10px"}
                />
                <TitleText>Career</TitleText>
            </TitleRow>
            <SizedBox
                height={"50px"}
            />
            {
                careerModels.map((careerModel)=>
                <SingleCareer
                career={careerModel}
                />
                )
            }
          
        </MainDiv>
    )
}

export default CareerMain


