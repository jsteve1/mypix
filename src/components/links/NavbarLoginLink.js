import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

export const NavbarButton = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    display: flex; 
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    width: 100px;
    padding: 10px;
    min-width: fit-content;
    height: 50px;
    transition: all ease 0.25s;
    &:hover {
        transform: scale(1.02); 
    }
    margin-right: 10px;
`; 

export default function NavbarLoginLink() {
    const navigate = useNavigate();
    return (
        <NavbarButton  onClick={() => navigate("/login")}>
            Login 
        </NavbarButton>
    )
}