import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const MainDiv = styled.div<{ width: string, height: string, margintop: string }>`
width:${props => props.width};
height: ${props => props.height};
border-radius: 6px;
position: relative;
margin-top: ${props => props.margintop};
`
const StyledImage = styled.img<{ opacity: number }>`
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
`

const ImageCarousel = ({ images, children, width, height, isdraggable, margintop }) => {

    const renderImages = () => {

        if (images.length > 0) {
            return (
                images.map((image) => {

                    return (
                        <StyledImage
                            opacity={1}
                            src={image.link === undefined || image.link.length === 1 ? image : image.link}
                        />
                    )
                })
            )
        }
    }

    return (
        <MainDiv width={width} height={height} margintop={margintop ?? 0}>
            <StyledCarousel
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