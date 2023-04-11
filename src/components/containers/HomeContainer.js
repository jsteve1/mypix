import HomeNavbar from '../navbar/HomeNavbar';
import HomeTextContainer from './home/HomeTextContainer';
import HomeBackgroundDiv from './home/HomeBackground';
import { BackgroundDiv } from './BackgroundDiv';

export default function HomeContainer() {
    return (
        <>
            <HomeNavbar />
            <BackgroundDiv>
                <HomeTextContainer />
            </BackgroundDiv>
            <HomeBackgroundDiv />
        </>
    )
}