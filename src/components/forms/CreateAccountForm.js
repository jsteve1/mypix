import styled from "styled-components";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginField, LoginInput } from "./LoginForm";
import { EnvelopeAt, KeyFill, Stars } from "react-bootstrap-icons";
import { HomeButton } from "../links/SignIn";

export const CreateAccountDiv = styled.div`

`;

export default function CreateAccountForm() { 
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
    const createAccount = () => {
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
        <CreateAccountDiv>
            <LoginField>
                <EnvelopeAt style={{ marginRight: "10px" }} />Email
            </LoginField>
            <LoginInput autoFocus={true} value={email} ref={emailRef} placeholder="Your Email" onChange={emailChange}/>
            <LoginField>
                <KeyFill style={{ marginRight: "10px" }} />   Password
            </LoginField>
            <LoginInput value={password} passwordRef={passwordRef} placeholder="Enter a Password" type="password" onChange={pwChange} />
            <HomeButton onClick={createAccount}>
                Get Started <Stars style={{ marginLeft: "5px" }} />
            </HomeButton>
        </CreateAccountDiv>
    )
}