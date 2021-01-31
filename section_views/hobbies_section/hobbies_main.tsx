import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import AppColors from '../../utils/colors';
import { AiFillHeart } from "react-icons/ai";
import ImageCarousel from '../../components/image_carousel';
import SingleHobby from './single_hobby';
import HobbyModel from '../../models/hobby_model';

const MainDiv = styled.div`
padding: 10vh 14.32vw;
display: flex;
flex-direction: column;
align-items: flex-start;
align-items: center;
background-color: ${AppColors.SECONDARY_COLOR};
height: 120vh;
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
color: white;
`
const PhilosophyText = styled.text`
margin-top: 10px;
font-size: 20px;
font-weight: 600;
color: white;
white-space: break-spaces;
`
const PhilosophySpan = styled.span`
font-size: 20px;
font-weight: 600;
color: white;
font-style: italic;
`

const HobbiesMain = () => {

    let hobbyList: Array<HobbyModel> = [
        new HobbyModel("Bodybuilding", "Go hard or go home!", "Bodybuilding since 2010", "/static/images/hobbies_bodybuilding.png"),
        new HobbyModel("Traveling & Vacation", "Seeing new places is wonderful.", "Travelling & vacation allows me to see regions and rest between hard working periods.", "/static/images/hobbies_vacation.png"),
        new HobbyModel("Football", "Love watching football matches", "I am a big fan of Beşiktaş JK and I try not to miss it's matches.", "/static/images/hobbies_football.png"),
        new HobbyModel("Coding", "Coding is a passion", "I absolutely love developing new software that makes people's life easier.", "/static/images/hobbies_coding.png"),
        new HobbyModel("Video Games", "Fun times...", "I am playing video games since I was 3 and it seems like I'll continue to play these games until the end of my life.", "/static/images/hobbies_games.png"),
    ]

    return (
        <MainDiv>
            <TitleRow>
                <AiFillHeart
                    size={"35px"}
                    color={"white"}
                />
                <SizedBox
                    width={"10px"}
                />
                <TitleText>My Hobbies</TitleText>
            </TitleRow>
            <PhilosophyText>
                {`My philosopy in life:\n`}
                <PhilosophySpan>
                    {`"No Pain No Gain!"`}
                </PhilosophySpan>
            </PhilosophyText>
            <SizedBox
                height={"30px"}
            />
            <ImageCarousel
                width={"100%"}
                height={"100%"}
                images={undefined}
                isdraggable={true}
                margintop={"0px"}
                children={
                    hobbyList.map(hobby =>
                        <SingleHobby
                            hobby={hobby}
                        />
                    )
                }
            />

        </MainDiv>
    )
}

export default HobbiesMain


