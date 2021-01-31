import styled from 'styled-components'
import React from 'react';
import Draggable from 'react-draggable';

import menuAnim from "../../public/static/anims/menu_anim.json";
import Lottie from 'lottie-react';


const MainDiv = styled.div`
width: 42px;
height: 42px;
border-radius: 50%;
background: radial-gradient(#5270c2 0%, #091b39 100%, #1f4988 100%);
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`
const LottieAnim = styled(Lottie)`
width: 20px;
height: 20px;
`


const DraggableFab = () => {
    const [isAnimForwards, setAnimDirection] = React.useState(false)
    const lottieRef = React.useRef(null)
    const [isDragging, setDragStatus] = React.useState(true)

    React.useEffect(() => {
        if (lottieRef) {
            lottieRef.current.stop()
        }

    }, []);

    const onClick = () => {
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

    return (
        <Draggable
            bounds={"parent"}
            onDrag={onDrag}
            onStop={onDragStop}
            defaultPosition={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }}
        >
            <MainDiv>
                <LottieAnim
                    lottieRef={lottieRef}
                    animationData={menuAnim}
                    loop={false}
                    autoPlay={false}
                />
            </MainDiv>
        </Draggable>
    )
}

export default DraggableFab


