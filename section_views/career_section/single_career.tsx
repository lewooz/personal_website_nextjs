import styled from 'styled-components'
import React, { FC } from 'react';
import SizedBox from '../../components/sized_box';

import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import CareerModel from '../../models/career_model';

const MainDiv = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

`
const TitleText = styled.text`
max-width: 33px;
font-size: 14px;
font-style: italic;
color: white;
`
const CareerInfoContainer = styled.div`
border-left: 2px solid white;
width: 100%;
box-sizing: border-box;
padding-left: 20px;
position: relative;
`
const TopInfoContainer = styled.div`
width: 100%;
height: 145px;
padding: 60px 15px 30px 15px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-radius: 12px;
cursor: pointer;
position: relative;
:hover{
    background-color:rgba(255,255,255,0.12);
}
:hover .tooltip{
    visibility: visible;
}
`
const ExpandToolTip = styled.div`
position: absolute;
bottom: 20px;
right: 20px;
width: 95px;
height: 24px;
display: flex;
justify-content: center;
align-items: center;
background-color: #62646a;
color: white;
font-size: 10px;
border-radius: 6px;
visibility: hidden;
`
const TopLeftContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Title = styled.text`
font-size: 24px;
color: white;
@media (max-width: 767px) {
    font-size: 20px;
}
`
const SubTitle = styled.text`
font-size: 14px;
color: white;
@media (max-width: 767px) {
    font-size: 10px;
}
`
const WhiteBall = styled.div`
width: 18px;
height: 18px;
background-color: white;
border-radius: 50%;
position: absolute;
top: 69px;
left: -10px;
`
const BottomListContainer = styled.div<{ height: string }>`
display: flex;
flex-direction: column;
overflow: hidden;
width: 100%;
max-height: ${props => props.height};
box-sizing: border-box;
padding-left: 20px;
transition: max-height 0.6s;
margin-top: 10px;
`
const RowContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 20px;
`
const RowText = styled.text`
color: white;
font-size: 14px;
margin-left: 20px;
`
const StyledIcon = styled(BsArrowReturnRight)`
flex-shrink: 0;
`

interface CareerProps {
    career: CareerModel,
}

const SingleCareer: FC<CareerProps> = ({ career }) => {
    const [isDetailsOpen, setDetailStatus] = React.useState(false)

    const openList = () => {
        setDetailStatus(isDetailsOpen ? false : true)
    }
    const renderRows = (responsibility: string) => {
        return (
            <RowContainer>
                <StyledIcon
                    color={"white"}
                    size={"30px"}
                />
                <RowText>
                    {responsibility}
                </RowText>
            </RowContainer>
        )
    }

    return (
        <MainDiv>
            <TitleText>{career.yearText}</TitleText>
            <SizedBox
                width={"37px"}
            />
            <CareerInfoContainer>
                <TopInfoContainer
                    onClick={openList}
                >
                    <TopLeftContainer>
                        <Title>{career.titleText}</Title>
                        <SubTitle>{career.locationText}</SubTitle>
                    </TopLeftContainer>
                    {
                        career.responsibilitiesList.length > 0 ?
                            <>
                                <IoIosArrowDown
                                    color={"white"}
                                />
                                <ExpandToolTip className={"tooltip"}>Click to expand</ExpandToolTip>
                            </>
                            : null
                    }
                </TopInfoContainer>
                {
                    career.responsibilitiesList.length > 0 ?
                        <BottomListContainer
                            height={isDetailsOpen ? "800px" : "0"}
                        >
                            {
                                career.responsibilitiesList.map((responsibility) =>
                                    renderRows(responsibility)
                                )
                            }
                        </BottomListContainer>
                        : null
                }
                <WhiteBall />
            </CareerInfoContainer>
        </MainDiv>
    )
}

export default SingleCareer


