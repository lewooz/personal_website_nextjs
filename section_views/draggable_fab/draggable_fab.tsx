import styled from 'styled-components'
import React from 'react';
import Draggable from 'react-draggable';
import { AiFillHome } from "react-icons/ai";
import menuAnim from "../../public/static/anims/menu_anim.json";
import Lottie from 'lottie-react';
import MenuCircle from './menu_circle';
import { Animated } from "react-animated-css";
import { MdDeveloperMode } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { VscBroadcast } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';

const MainDiv = styled.div`
width: 40px;
height: 40px;
position: fixed;
display: flex;
cursor: pointer;
z-index: 20;
`
const LottieAnim = styled(Lottie)`
width: 20px;
height: 20px;
flex-shrink: 0;
position: absolute;
z-index: 5;
`
const RelativeDiv = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: radial-gradient(#5270c2 0%, #091b39 100%, #1f4988 100%);
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
z-index: 6;
`
const MoveInfo = styled.div`
position: absolute;
top:-42px;
padding: 10px;
background-color:#EE4047;
font-size: 14px;
color: white;
font-weight: 600;
width: 171px;
border-radius: 6px;
left: -63px;
`
const StyledDraggable = styled(Draggable)`

`
const AnimatedDraggable = styled(Animated)`
opacity: 1 !important;
`

const DraggableFab = ({ onmenuitemclicked }) => {
    const [isAnimForwards, setAnimDirection] = React.useState(false)
    const lottieRef = React.useRef(null)
    const [isDragging, setDragStatus] = React.useState(true)
    const [isFabOpen, setFabStatus] = React.useState(false)
    const [isTooltipVisible, setToolTipStatus] = React.useState(true)

    React.useEffect(() => {
        if (lottieRef) {
            lottieRef.current.stop()
        }
        setTimeout(() => {
            setToolTipStatus(false)
        }, 2500);
    }, []);

    const onClick = () => {
        setFabStatus(isFabOpen ? false : true)
        if (isAnimForwards) {
            setAnimDirection(false)
            lottieRef.current.setDirection(-1)
        } else {
            setAnimDirection(true)
            lottieRef.current.setDirection(1)
        }
        lottieRef.current.play()
    }
    const onDrag = () => {
        setDragStatus(true)

    }
    const onDragStop = () => {
        setDragStatus(false)
        if (!isDragging) {
            onClick()
        }
    }
    const onMenuItemClicked = (text) => {
        onmenuitemclicked(text)
    }

    return (
        <StyledDraggable
            bounds={"parent"}
            onDrag={onDrag}
            onStop={onDragStop}
            defaultPosition={{ x: window.innerWidth - 200, y: window.innerHeight / 2 }}
            defaultClassName={"draggable"}
        >
            <MainDiv>
                <AnimatedDraggable
                    animationIn="rubberBand"
                    animationOut={"bounce"}
                    isVisible={isFabOpen}
                    animateOnMount={false}
                >
                    <RelativeDiv>
                        {
                            isTooltipVisible ?
                                <AnimatedDraggable
                                    animationIn="flash"
                                    animationOut={"fadeOutRight"}
                                    isVisible={isTooltipVisible}
                                    animateOnMount={true}
                                >
                                    <MoveInfo>
                                        DRAG TO MOVE MENU
                            </MoveInfo>
                                </AnimatedDraggable>
                                :
                                null
                        }
                        <MenuCircle
                            key={1}
                            top={-30}
                            left={-44}
                            isFabOpen={isFabOpen}
                            tooltipText={"Home"}
                            tooltipPlacement={"top"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<AiFillHome
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={2}
                            top={-45}
                            left={-12}
                            isFabOpen={isFabOpen}
                            tooltipText={"Developer"}
                            tooltipPlacement={"top"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<MdDeveloperMode
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={3}
                            top={-45}
                            left={20}
                            isFabOpen={isFabOpen}
                            tooltipText={"Education"}
                            tooltipPlacement={"top"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<FaGraduationCap
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={4}
                            top={-30}
                            left={52}
                            isFabOpen={isFabOpen}
                            tooltipText={"Career"}
                            tooltipPlacement={"top"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<AiFillSetting
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={5}
                            top={5}
                            left={63}
                            isFabOpen={isFabOpen}
                            tooltipText={"Tech Stack"}
                            tooltipPlacement={"right"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<svg width="17pt" height="17pt" viewBox="0 0 35 35" version="1.1">
                                <g id="surface1">
                                    <path fill={"white"} d="M 7.953125 18.183594 C 8.320312 18.171875 8.613281 17.871094 8.613281 17.5 C 8.613281 17.132812 8.320312 16.828125 7.953125 16.816406 C 7.945312 16.816406 7.9375 16.816406 7.929688 16.816406 C 7.550781 16.816406 7.246094 17.121094 7.246094 17.5 C 7.246094 17.878906 7.550781 18.183594 7.929688 18.183594 C 7.9375 18.183594 7.945312 18.183594 7.953125 18.183594 Z M 7.953125 18.183594 " />
                                    <path fill={"white"} d="M 17.5 7.246094 C 12.796875 7.246094 8.898438 10.390625 7.660156 14.601562 C 7.554688 14.960938 7.761719 15.34375 8.125 15.449219 C 8.488281 15.554688 8.867188 15.347656 8.972656 14.984375 C 10.078125 11.234375 13.582031 8.613281 17.5 8.613281 C 22.398438 8.613281 26.386719 12.601562 26.386719 17.5 C 26.386719 21.191406 24.125 24.359375 20.917969 25.703125 L 20.917969 20.519531 L 23.453125 17.984375 C 23.582031 17.855469 23.652344 17.679688 23.652344 17.5 L 23.652344 16.132812 C 23.652344 15.753906 23.347656 15.449219 22.96875 15.449219 C 22.589844 15.449219 22.285156 15.753906 22.285156 16.132812 L 22.285156 17.21875 L 19.75 19.75 C 19.621094 19.878906 19.550781 20.054688 19.550781 20.234375 L 19.550781 26.148438 C 19.105469 26.253906 18.648438 26.324219 18.183594 26.359375 L 18.183594 16.730469 C 19.363281 16.425781 20.234375 15.355469 20.234375 14.082031 C 20.234375 12.574219 19.007812 11.347656 17.5 11.347656 C 15.992188 11.347656 14.765625 12.574219 14.765625 14.082031 C 14.765625 15.355469 15.636719 16.425781 16.816406 16.730469 L 16.816406 26.359375 C 16.351562 26.324219 15.894531 26.253906 15.449219 26.152344 L 15.449219 20.234375 C 15.449219 20.054688 15.378906 19.878906 15.25 19.75 L 12.714844 17.21875 L 12.714844 16.132812 C 12.714844 15.753906 12.410156 15.449219 12.03125 15.449219 C 11.652344 15.449219 11.347656 15.753906 11.347656 16.132812 L 11.347656 17.5 C 11.347656 17.679688 11.417969 17.855469 11.546875 17.984375 L 14.082031 20.519531 L 14.082031 25.710938 C 11.660156 24.714844 9.761719 22.667969 8.972656 20.011719 C 8.867188 19.652344 8.484375 19.445312 8.125 19.550781 C 7.761719 19.660156 7.554688 20.039062 7.664062 20.402344 C 9.011719 24.941406 13.128906 27.753906 17.5 27.753906 C 23.140625 27.753906 27.753906 23.164062 27.753906 17.5 C 27.753906 11.847656 23.152344 7.246094 17.5 7.246094 Z M 16.132812 14.082031 C 16.132812 13.328125 16.746094 12.714844 17.5 12.714844 C 18.253906 12.714844 18.867188 13.328125 18.867188 14.082031 C 18.867188 14.835938 18.253906 15.449219 17.5 15.449219 C 16.746094 15.449219 16.132812 14.835938 16.132812 14.082031 Z M 16.132812 14.082031 " />
                                    <path fill={"white"} d="M 34.460938 14.78125 L 31.519531 14.136719 C 31.171875 12.660156 30.59375 11.257812 29.796875 9.964844 L 31.535156 7.3125 C 31.710938 7.042969 31.671875 6.683594 31.445312 6.457031 L 28.542969 3.554688 C 28.316406 3.328125 27.957031 3.289062 27.6875 3.46875 L 25.035156 5.203125 C 23.742188 4.40625 22.339844 3.828125 20.863281 3.480469 L 20.21875 0.535156 C 20.148438 0.222656 19.871094 0 19.550781 0 L 15.449219 0 C 15.128906 0 14.851562 0.222656 14.78125 0.535156 L 14.136719 3.480469 C 12.660156 3.828125 11.257812 4.40625 9.964844 5.203125 L 7.3125 3.46875 C 7.042969 3.289062 6.683594 3.328125 6.457031 3.554688 L 3.554688 6.457031 C 3.328125 6.683594 3.289062 7.042969 3.464844 7.3125 L 5.203125 9.964844 C 4.40625 11.257812 3.828125 12.660156 3.480469 14.136719 L 0.535156 14.78125 C 0.222656 14.851562 0 15.128906 0 15.449219 L 0 19.550781 C 0 19.871094 0.222656 20.148438 0.535156 20.21875 L 3.511719 20.871094 C 3.867188 22.335938 4.441406 23.71875 5.230469 24.988281 L 3.464844 27.6875 C 3.289062 27.957031 3.328125 28.316406 3.554688 28.542969 L 6.457031 31.445312 C 6.683594 31.671875 7.042969 31.710938 7.3125 31.535156 L 10.046875 29.746094 C 11.316406 30.515625 12.675781 31.074219 14.109375 31.414062 L 14.78125 34.464844 C 14.851562 34.777344 15.128906 35 15.449219 35 L 19.550781 35 C 19.871094 35 20.148438 34.777344 20.21875 34.464844 L 20.890625 31.414062 C 22.324219 31.074219 23.683594 30.515625 24.953125 29.746094 L 27.6875 31.535156 C 27.957031 31.710938 28.316406 31.671875 28.542969 31.445312 L 31.445312 28.542969 C 31.671875 28.316406 31.710938 27.957031 31.535156 27.6875 L 29.769531 24.988281 C 30.558594 23.71875 31.132812 22.335938 31.488281 20.871094 L 34.464844 20.21875 C 34.777344 20.148438 35 19.871094 35 19.550781 L 35 15.449219 C 35 15.128906 34.777344 14.851562 34.460938 14.78125 Z M 33.632812 19 L 30.769531 19.628906 C 30.507812 19.6875 30.304688 19.894531 30.25 20.15625 C 29.910156 21.761719 29.285156 23.261719 28.386719 24.613281 C 28.234375 24.839844 28.234375 25.136719 28.382812 25.367188 L 30.085938 27.96875 L 27.96875 30.085938 L 25.332031 28.363281 C 25.105469 28.214844 24.8125 28.214844 24.585938 28.363281 C 23.230469 29.242188 21.75 29.847656 20.179688 30.171875 C 19.914062 30.226562 19.707031 30.429688 19.648438 30.691406 L 19 33.632812 L 16 33.632812 L 15.351562 30.691406 C 15.292969 30.429688 15.085938 30.226562 14.820312 30.171875 C 13.25 29.847656 11.769531 29.242188 10.414062 28.363281 C 10.183594 28.214844 9.894531 28.214844 9.667969 28.363281 L 7.03125 30.085938 L 4.914062 27.96875 L 6.617188 25.367188 C 6.765625 25.136719 6.765625 24.839844 6.613281 24.613281 C 5.714844 23.261719 5.089844 21.761719 4.75 20.15625 C 4.695312 19.894531 4.492188 19.6875 4.230469 19.628906 L 1.367188 19 L 1.367188 16 L 4.203125 15.375 C 4.464844 15.320312 4.671875 15.109375 4.726562 14.84375 C 5.050781 13.230469 5.679688 11.714844 6.585938 10.335938 C 6.734375 10.109375 6.734375 9.8125 6.585938 9.585938 L 4.914062 7.03125 L 7.03125 4.914062 L 9.585938 6.585938 C 9.8125 6.734375 10.109375 6.734375 10.335938 6.585938 C 11.714844 5.679688 13.230469 5.054688 14.84375 4.726562 C 15.109375 4.671875 15.320312 4.46875 15.375 4.203125 L 16 1.367188 L 19 1.367188 L 19.625 4.203125 C 19.679688 4.46875 19.890625 4.671875 20.15625 4.726562 C 21.769531 5.054688 23.285156 5.679688 24.664062 6.585938 C 24.890625 6.734375 25.1875 6.734375 25.414062 6.585938 L 27.96875 4.914062 L 30.085938 7.03125 L 28.414062 9.585938 C 28.265625 9.8125 28.265625 10.109375 28.414062 10.335938 C 29.320312 11.714844 29.949219 13.230469 30.273438 14.84375 C 30.328125 15.109375 30.53125 15.320312 30.796875 15.375 L 33.632812 16 Z M 33.632812 19 " />
                                </g>
                            </svg>}
                        />
                        <MenuCircle
                            key={6}
                            top={40}
                            left={52}
                            isFabOpen={isFabOpen}
                            tooltipText={"Courses Taken"}
                            tooltipPlacement={"bottom"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<VscBroadcast
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={7}
                            top={54}
                            left={20}
                            isFabOpen={isFabOpen}
                            tooltipText={"Hobbies"}
                            tooltipPlacement={"bottom"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<AiFillHeart
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={8}
                            top={54}
                            left={-14}
                            isFabOpen={isFabOpen}
                            tooltipText={"Languages"}
                            tooltipPlacement={"bottom"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<MdLanguage
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={9}
                            top={40}
                            left={-44}
                            isFabOpen={isFabOpen}
                            tooltipText={"Applications"}
                            tooltipPlacement={"bottom"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<AiFillProject
                                size={17}
                                color={"white"}
                            />}
                        />
                        <MenuCircle
                            key={10}
                            top={5}
                            left={-55}
                            isFabOpen={isFabOpen}
                            tooltipText={"Personal Info"}
                            tooltipPlacement={"left"}
                            onclick={(text) => onMenuItemClicked(text)}
                            child={<FaUserCircle
                                size={17}
                                color={"white"}
                            />}
                        />
                        <LottieAnim
                            lottieRef={lottieRef}
                            animationData={menuAnim}
                            loop={false}
                            autoPlay={false}
                        />
                    </RelativeDiv>
                </AnimatedDraggable>
            </MainDiv>

        </StyledDraggable>
    )
}

export default DraggableFab


