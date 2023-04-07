import { BackgroundDiv } from './BackgroundDiv';
import LoginForm from '../forms/LoginForm';
import LoginText from '../text/LoginText';
import HomeNavbar from '../navbar/HomeNavbar';

export default function LoginContainer() {
    return (
        <>
            <HomeNavbar />
            <BackgroundDiv>
                <LoginText />
                <LoginForm />
            </BackgroundDiv>
        </>
    )
}