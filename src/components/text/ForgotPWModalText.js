import styled from 'styled-components'; 

const ForgotPWModalTextDiv = styled.div`
    font-size: 16pt;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #962DB9;
    width: 75%; 
`;

export default function ForgotPWModalText() {
    return (
        <ForgotPWModalTextDiv>
            Enter your email address and we'll send you a link to reset your password.
        </ForgotPWModalTextDiv>
    )
}