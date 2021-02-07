import styled from 'styled-components'
import React from 'react';
import FlippingCard from '../../components/flipping_card';
import SizedBox from '../../components/sized_box';

const MainDiv = styled.div`
width: 100%;
padding: 200px 200px;
display: flex;
flex-direction: column;
@media (max-width: 767px) {
    padding: 110px 0;  
}
`
const FlippingCardTopContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`
const FlippingCardBottomContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin-top: 40px;
@media (max-width: 767px) {
    justify-content: space-between;
}
`

const PersonalMain = () => {
    return (
        <MainDiv>
            <FlippingCardTopContainer>
                <FlippingCard
                    frontImageLink={"/static/images/turkey_flag.png"}
                    backImageLink={"/static/images/turkey_location.png"}
                    title={"Born in Turkey"}
                />
                <FlippingCard
                    frontImageLink={"/static/images/cekmekoy_front.png"}
                    backImageLink={"/static/images/cekmekoy_back.png"}
                    alignSelf={"flex-end"}
                    title={"Living in Çekmeköy / Istanbul"}
                />
            </FlippingCardTopContainer>
            <FlippingCardBottomContainer>
                <FlippingCard
                    frontImageLink={"/static/images/mail_front.png"}
                    backImageLink={"/static/images/mail_back.png"}
                    title={"My Mail Address"}
                    alignSelf={"flex-end"}
                />
                <SizedBox
                    width={"20px"}
                />
                <FlippingCard
                    frontImageLink={"/static/images/birth_date_front.png"}
                    backImageLink={"/static/images/birth_date_back.png"}
                    title={"My Birth Date"}
                />
            </FlippingCardBottomContainer>
        </MainDiv>
    )
}

export default PersonalMain


