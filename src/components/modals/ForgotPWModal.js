import styled from 'styled-components';
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectForgotPWModalOpened, setForgotPWModalOpened } from "../../app/uiSlice";
import ForgotPWModalText from "../text/ForgotPWModalText";
import { Send } from "react-bootstrap-icons";
import { useState, useRef } from "react";
import { LoginInput } from "../forms/LoginForm";
import { HomeButton } from "../links/SignIn";

const ForgotPWEmailInput = styled(LoginInput)`
    max-width: 275px;
    margin-bottom: 25px; 
    margin-top: 25px; 
`; 

export default function ForgotPWModal() {
    const dispatch = useDispatch(); 
    const forgotPWModalOpened = useSelector(selectForgotPWModalOpened); 
    const emailRef = useRef(null); 
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false);
    const emailChange = (e) => {
        setEmail(e.target.value); 
    }
    const resetPw = () => {

    }
    return (
        <Modal show={forgotPWModalOpened} onHide={() => dispatch(setForgotPWModalOpened(false))}>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "#962DB9" }}>Forgot Password</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
                <ForgotPWModalText />
                <ForgotPWEmailInput autoFocus={true} value={email} ref={emailRef} placeholder="Your Email" onChange={emailChange}/>
                <HomeButton onClick={resetPw}>
                    Send Email <Send style={{ marginLeft: "5px" }}/>
                </HomeButton>
            </Modal.Body>
        </Modal>
    )
}