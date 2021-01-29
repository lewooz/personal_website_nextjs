import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip';

import AppColors from '../utils/colors';
import React from 'react';
import SizedBox from './sized_box';

const MainDiv = styled.div`
height: 290px;
display: flex;
flex-direction: column;
align-self: ${props=>props.alignself};
align-items: center;
`
const TitleText = styled.text`
font-size: 20px;
font-weight: 500;
color: ${AppColors.PRIMARY_COLOR};
`
const ImageDiv = styled.div`
border-radius: 50%;
width: 290px;
height: 290px;
border: 8px solid ${AppColors.PRIMARY_COLOR};
background-image: url(${props=>props.backgroundImage});
background-size: contain;
background-position: center;
`


const FlippingCard = ({ frontImageLink, backImageLink, alignSelf = "flex-start", title=undefined }) => {

    const [isFlipped, setFlipStatus] = React.useState(false)

    return (
        <MainDiv
        alignself = {alignSelf}
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
                containerStyle={{
                    width: "290px",
                    height: "290px",
                    perspective: "0px"
                }}
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


