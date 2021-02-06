import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import FlippingCard from '../../components/flipping_card';

const MainDiv = styled.div`
width: 100%;
padding: 200px 200px;
display: flex;
flex-direction: column;
gap: 40px;
@media (max-width: 767px) {
    padding: 200px 0;  
}
`
const FlippingCardTopContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
@media (max-width: 767px) {
    gap: 40px;
    justify-content: center;
}
`
const FlippingCardBottomContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
gap: 40px;
@media (max-width: 767px) {
    gap: 40px;
    justify-content: center;
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


