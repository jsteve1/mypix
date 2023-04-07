import styled from 'styled-components';
import { Images } from 'react-bootstrap-icons'; 
import { useNavigate } from 'react-router-dom';

export const ImageIcon = styled(Images)`
    color: #cccccc;
    margin-left: 10px;
    width: 35px; 
    height: 35px;
`; 

export const NavbarBrandLink = styled.div`
    font-size: 1.5em;
    font-weight: 500;
    font-family: 'Segoe UI', sans-serif;
    margin-left: 25px;
    cursor: pointer;
    display: flex; 
    align-items: center;
    &:hover {
        transform: scale(1.02);
    }
`; 

export default function NavbarBrand() {
    const navigate = useNavigate();
    return (
        <NavbarBrandLink onClick={() => navigate("/home")}>
            My Pix <ImageIcon />
        </NavbarBrandLink>
    )
}