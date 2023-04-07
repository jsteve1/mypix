import { BoxArrowInRight } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const HomeButton = styled.div`
    color: #cccccc;
    font-size: 1.70rem;
    font-weight: 500;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    display: flex; 
    align-items: center;
    justify-content: center;
    background: rgb(2,0,36);
    background: linear-gradient(243deg, rgba(2,0,36,1) 0%, rgba(150,45,185,1) 0%, rgba(68,12,97,1) 100%);
    border-radius: 55px;
    width: 250px;
    padding: 10px;
    min-width: fit-content;
    height: 60px;
    transition: all ease 0.25s;
    &:hover {
        transform: scale(1.02); 
    }
    margin-right: 10px;
    margin: 15px;
`; 

export default function SignIn() {
    return (
        <HomeButton>
            Login <BoxArrowInRight />
        </HomeButton>
    )
}