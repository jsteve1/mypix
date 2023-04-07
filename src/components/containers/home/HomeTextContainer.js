import HomeText from '../../text/HomeText';
import SignIn from '../../links/SignIn';
import SignUp from '../../links/SignUp';
import styled from 'styled-components';

export const HomeTextContainerDiv = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: fit-content;
    color: #cccccc;
    margin-bottom: 25px;
`; 

export default function HomeTextContainer() {
    return (
        <HomeTextContainerDiv>
            <HomeText />
            <SignIn />
            <SignUp />
        </HomeTextContainerDiv>
    )
}