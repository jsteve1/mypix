import styled from 'styled-components';
import HeaderTextDiv from './HeaderText';

const WelcomeDiv = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;

`; 

export default function HomeText() {
    return (
        <HeaderTextDiv>
            <WelcomeDiv>Welcome</WelcomeDiv>
        </HeaderTextDiv>
    )
}