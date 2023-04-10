import { useState, useRef } from "react";
import { EnvelopeAt, KeyFill, BoxArrowInRight } from "react-bootstrap-icons";
import styled from "styled-components";
import HomeButton from "../links/SignIn";
import ForgotPWDiv from "../links/ForgotPW";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const LoginFormDiv = styled.div`
    height: 300px; 
    width: 300px;
`; 

export const LoginField = styled.div`
    height: 50px;
    width: 100%; 
    display: flex;
    justify-content: start;
    align-items: center;
    color: #962DB9;
    font-size: 1.2rem;
    font-weight: 500;
    `; 

export const LoginInput = styled.input`
    width: 100%;
    background-color: transparent; 
    border: none;
    border-bottom: 2px solid #962DB9;
    height: 50px;
    font-size: 1.2rem;
    color: #962DB9;
    padding-left: 10px;
    &::placeholder {
        font-weight: 100;
    }
    &:focus {
        outline: none;
        border: none; 
        border-bottom: 2px solid #962DB9;
        background-color: rgba(100, 100, 100, 0.1);
        border-radius: 5px 5px 0px 0px;
    }
    &:focus-visible {
        outline: none;
        border: none; 
        border-bottom: 2px solid #962DB9;
        background-color: rgba(100, 100, 100, 0.1);
        border-radius: 5px 5px 0px 0px;
    }
    margin-bottom: 10px;
`; 



export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null); 
    const passwordRef = useRef(null); 
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const pwChange = (e) => {
        setPassword(e.target.value);
    }
    const login = () => {
        if(loading) return; 
        setLoading(true);
        setError("");
        if(email === "" || password === "") {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

    }
    return (
        <LoginFormDiv>
            <LoginField>
              <EnvelopeAt style={{ marginRight: "10px" }} />Email
            </LoginField>
            <LoginInput autoFocus={true} value={email} ref={emailRef} placeholder="Enter your Email" onChange={emailChange}/>
            <LoginField>
               <KeyFill style={{ marginRight: "10px" }} />   Password
            </LoginField>
            <LoginInput value={password} passwordRef={passwordRef} placeholder="Enter your Password" type="password" onChange={pwChange} />
            <HomeButton onClick={login}>
                Login <BoxArrowInRight />
            </HomeButton>
            <ForgotPWDiv />
        </LoginFormDiv>
    )
}