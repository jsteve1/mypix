
import CreateAccountForm from '../forms/CreateAccountForm'; 
import CreateAccountText from '../text/CreateAccountText';
import { BackgroundDiv } from '../containers/BackgroundDiv';
import HomeNavbar from '../navbar/HomeNavbar';

export default function CreateAccountContainer() {
    return (
        <>
            <HomeNavbar />
            <BackgroundDiv>
                <CreateAccountText />
                <CreateAccountForm />
            </BackgroundDiv>
        </>
    )
}