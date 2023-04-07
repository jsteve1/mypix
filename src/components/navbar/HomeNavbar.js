import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import NavbarBrand from '../links/NavbarBrand';
import NavbarProfileLink from '../links/NavbarProfileLink';
import NavbarLoginLink from '../links/NavbarLoginLink';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../app/accountSlice';
import { useLocation, useNavigate } from 'react-router-dom';
export const TopNavbar = styled(Navbar)`
    background-color: rgba(100, 100, 100, 0.25);
    color: #cccccc; 
    font-family: 'Segoe UI', sans-serif;
    display: flex; 
    justify-content: space-between;
    background: rgb(2,0,36);
    background: linear-gradient(243deg, rgba(2,0,36,1) 0%, rgba(175,104,198,1) 0%, rgba(102,51,122,1) 45%, rgba(68,12,97,1) 84%);
    padding-right: 15px;
`;

export default function HomeNavbar() {
    const loggedIn = useSelector(selectLoggedIn); 
    const location = useLocation(); 
    const navigate = useNavigate();
    return (
        <TopNavbar variant="dark" fixed="top">
            <NavbarBrand />
            <div className="d-flex">
                {
                    location.pathname !== '/login' ? <NavbarLoginLink /> : <></>
                }
                {
                    loggedIn ? <NavbarProfileLink /> : <></>
                }
            </div>
        </TopNavbar>
    )
}