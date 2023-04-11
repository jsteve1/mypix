import styled from "styled-components";
import bg from '../../../static/bg.jpg'; 

export const HomeBackgroundDiv = styled.div`
    padding-top: 60px;
    position: absolute;
    z-index: -10;
    max-width: 100vw;
    width: 100vw;
    top: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 1s ease;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;    
    background-repeat: no-repeat;
`;

export default function HomeBackground() {
    return (
        <HomeBackgroundDiv />
    )
}