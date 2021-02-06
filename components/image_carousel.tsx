import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import AppColors from '../utils/colors';
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const MainDiv = styled.div`
width:${props => props.width};
height: ${props => props.height};
border-radius: 6px;
position: relative;
margin-top: ${props => props.margintop};
`
const StyledImage = styled.img`
object-fit: cover;
border-radius: 6px;
opacity: ${props => props.opacity};
`
const StyledCarousel = styled(Carousel)`
outline:0;
img{
    object-fit: contain;
}

ul{
    li:last-child{
        margin-right : 0 !important;
    }
}
/* .paging-item{
    margin-right: 5px;
    display: ${props => props.showdots};
    button{
    width: 7px;
    height: 7px;
    background-color: white !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 0;
    position:relative;
    }
    &.active{
    button{
    width: 7px;
    height: 7px;
    background-color: white !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 0;
    ::before{
        content: "";
        border-radius: 50px;
        width: 3px;
        height: 3px;
        background-color: ${AppColors.PRIMARY_COLOR};
        position: absolute;
        top:2px;
        left:2px;
        right: 0;
        bottom: 0;
    }
    .paging-dot{
        display: none;
    }
    }
    }
} */
`

const ImageCarousel = ({ images, children, width, height, isdraggable, margintop }) => {

    const renderImages = () => {

        if (images.length > 0) {
            return (
                images.map((image) => {

                    return (
                        <StyledImage onClick={onclick} opacity={"1"} src={image.link === undefined || image.link.length === 1 ? image : image.link} width={width} height={height} />
                    )
                })
            )
        }
    }

    return (
        <MainDiv width={width} height={height} margintop={margintop ?? 0}>
            <StyledCarousel
                horizontal
                wrapAround
                autoplay
                dragging={isdraggable ?? true}

                renderCenterLeftControls={({ previousSlide }) => (
                    <IoChevronBack
                        onClick={previousSlide}
                        size={"45px"}
                        color={"white"}
                    />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <IoChevronForward
                        onClick={nextSlide}
                        size={"45px"}
                        color={"white"}
                    />
                )}
                renderBottomCenterControls={({ currentSlide }) => (
                    <div>

                    </div>
                )}
            >
                {
                    images ?
                        renderImages()
                        :
                        children
                }
            </StyledCarousel>

        </MainDiv >
    )
}

export default ImageCarousel