import styled from 'styled-components';
import HeaderTextDiv from './HeaderText';

const LoginDiv = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`; 

export default function LoginText() {
    return (
        <HeaderTextDiv>
            <LoginDiv>Login</LoginDiv>
        </HeaderTextDiv>
    )
}