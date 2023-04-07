import styled from 'styled-components';
import HomeNavbar from '../navbar/HomeNavbar';
import HomeTextContainer from './home/HomeTextContainer';
import HomePicsContainer from './home/HomePicsContainer';
import { BackgroundDiv } from './BackgroundDiv';

export default function HomeContainer() {
    return (
        <>
            <HomeNavbar />
            <BackgroundDiv>
                <HomeTextContainer />
                <HomePicsContainer />
            </BackgroundDiv>
        </>
    )
}