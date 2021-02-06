import styled from 'styled-components'
import AppColors from '../../utils/colors'
import DesktopHeader from './desktop_header'
import MobileHeader from './mobile_header'


const MainDiv = styled.div`
width: 100%;
height: 52vh;
position: sticky;
top: 0;
display: flex;
flex-direction: row;
padding: 56px 91px;
box-sizing: border-box;
position: relative;
background: linear-gradient(#000 0%, #1f4988 50.19%, #000 100%);
@media (max-width: 767px) {
    padding: 0;
}
`

const DesktopContainer = styled.div`
display: none;
width: 100%;
@media (min-width: 767px) {
    display: flex;
}
`
const MobileContainer = styled.div`
display: none;
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
padding: 11px 5px;
@media (max-width: 767px) {
    display: flex;
}
`

const Header = () => {
    return (
        <MainDiv>
            <DesktopContainer>
                <DesktopHeader />
            </DesktopContainer>
            <MobileContainer>
                <MobileHeader />
            </MobileContainer>
        </MainDiv>
    )
}

export default Header


