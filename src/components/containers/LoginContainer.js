import { BackgroundDiv } from './BackgroundDiv';
import LoginForm from '../forms/LoginForm';
import LoginText from '../text/LoginText';
import HomeNavbar from '../navbar/HomeNavbar';
import ForgotPWModal from '../modals/ForgotPWModal';

export default function LoginContainer() {
    return (
        <>
            <HomeNavbar />
            <BackgroundDiv>
                <LoginText />
                <LoginForm />
            </BackgroundDiv>
            <ForgotPWModal />
        </>
    )
}