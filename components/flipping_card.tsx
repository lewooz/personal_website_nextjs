import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip';

import AppColors from '../utils/colors';
import React from 'react';
import SizedBox from './sized_box';

const MainDiv = styled.div<{ alignself: string }>`
height: 290px;
width: 290px;
display: flex;
flex-direction: column;
justify-content: center;
align-self: ${props => props.alignself};
align-items: center;
@media (max-width: 767px) {
    height: 180px;
    width: 150px;
}
`
const TitleText = styled.text`
width: 290px;
font-size: 20px;
font-weight: 500;
color: ${AppColors.PRIMARY_COLOR};
text-align: center;
@media (max-width: 767px) {
    width: 150px;
    font-size: 14px;
    font-weight: 700;
}
`
const ImageDiv = styled.div<{ backgroundImage: string }>`
border-radius: 50%;
width: 290px;
height: 290px;
border: 8px solid ${AppColors.PRIMARY_COLOR};
background-image: url(${props => props.backgroundImage});
background-size: contain;
background-position: center;
@media (max-width: 767px) {
    height: 150px;
    width: 150px;
    border-width: 4px;
}
`


const FlippingCard = ({ frontImageLink, backImageLink, alignSelf = "flex-start", title = undefined }) => {

    const [isFlipped, setFlipStatus] = React.useState(false)

    return (
        <MainDiv
            alignself={alignSelf}
            onMouseEnter={() => setFlipStatus(true)}
            onMouseLeave={() => setFlipStatus(false)}
        >
            {
                title !== undefined ?
                    <TitleText>{title}</TitleText>
                    :
                    null
            }
            <SizedBox
                height={"5px"}
            />
            <ReactCardFlip
                isFlipped={isFlipped} flipDirection="horizontal"
            >
                <ImageDiv
                    backgroundImage={frontImageLink}
                />
                <ImageDiv
                    backgroundImage={backImageLink}
                />
            </ReactCardFlip>
        </MainDiv>
    )
}

export default FlippingCard


