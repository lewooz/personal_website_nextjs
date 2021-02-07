import styled from "styled-components";
import React from 'react';

const StyledDiv = styled.div<TestProps>` 
height: ${props => props.height ?? 0};
width: ${props => props.width ?? 0};
min-height: ${props => props.height ?? 0};
min-width: ${props => props.width ?? 0};
visibility: ${props => props.visibility};
display: ${props => props.display};
`
interface TestProps {
    height?: string,
    width?: string,
    visibility?: string,
    display?: string
}
const defaultProps: TestProps = {
    height: "0px",
    width: "0px",
    visibility: "visible",
    display: 'flex'
}

const SizedBox = (props = defaultProps) => {

    return (
        <StyledDiv
            height={props.height}
            width={props.width}
            visibility={props.visibility ?? "visible"}
            display={props.display ?? "flex"}
        />
    )
}

export default SizedBox