import styled from 'styled-components'
import React, { FC } from 'react';
import ReactTooltip from "react-tooltip";

const MainDiv = styled.div<MenuCircleProps>`
width: ${props => props.size}px;
height: ${props => props.size}px;
border-radius: 50%;
background: radial-gradient(#5270c2 0%, #091b39 100%, #1f4988 100%);
position: absolute;
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
top: ${props => props.top}px;
left: ${props => props.left}px;
transition: all 0.5s ease-in-out;
z-index: 10;
opacity: ${props => props.opacity};
`
const RelativeDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
position: relative;
`
type MenuCircleProps = {
    top: number
    left: number
    size: number
    opacity: number
};

const MenuCircle = ({ top, left, isFabOpen, child, tooltipText="", tooltipPlacement, onclick }) => {
    const [showToolTip, setToolTipStatus] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setToolTipStatus(isFabOpen ? true : false)
        }, 500);
    }, [isFabOpen]);

    return (
        <MainDiv
            top={isFabOpen ? top : 17}
            left={isFabOpen ? left : 15}
            size={isFabOpen ? 30 : 0}
            opacity={isFabOpen ? 1 : 0}
            onClick={() => onclick(tooltipText)}
        >
            <RelativeDiv data-tip data-for={tooltipText}>
                {child}
                {
                    showToolTip ?
                        <ReactTooltip id={tooltipText} place={tooltipPlacement} effect="solid" >
                            {tooltipText}
                        </ReactTooltip>
                        :
                        null
                }

            </RelativeDiv>

        </MainDiv>
    )
}

export default MenuCircle


