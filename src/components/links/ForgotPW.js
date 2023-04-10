import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setForgotPWModalOpened } from "../../app/uiSlice";
export const ForgotPWDiv = styled.div`
    color: #aaaaaa; 
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transform: scale(1.02);
    }
`; 

export default function ForgotPW() {
    const dispatch = useDispatch(); 
    const forgotPW = () => {
        dispatch(setForgotPWModalOpened(true))
    }
    return (
        <ForgotPWDiv onClick={forgotPW}>
            Forgot Password?
        </ForgotPWDiv>
    )
}