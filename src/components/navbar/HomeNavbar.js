import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import NavbarBrand from '../links/NavbarBrand';
import NavbarProfileLink from '../links/NavbarProfileLink';
import NavbarLoginLink from '../links/NavbarLoginLink';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedIn } from '../../app/accountSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowsMove, BoundingBox } from 'react-bootstrap-icons';
import { selectResizingPix, selectMovingPix, setResizingPix, setMovingPix } from '../../app/uiSlice';

export const ResizeButton = styled.div`
    font-weight: 500;
    font-size: 1.2rem;
    color: #cccccc;
    &:hover {
        transform: scale(1.02);
    }
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 5px;
    cursor: pointer; 
    ${props => props.$resizing ? `color: #dcadeb;` : ``}
`; 

export const MoveButton = styled(ResizeButton)`
    ${props => props.$moving ? `color: #dcadeb;` : ``}
`; 

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
    const resizing = useSelector(selectResizingPix); 
    const moving = useSelector(selectMovingPix);
    const location = useLocation(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const resize = () => {
        if(resizing) {
            dispatch(setResizingPix(false));
        } else {
            dispatch(setResizingPix(true));
        }
    }
    const move = () => {
        if(moving) {
            dispatch(setMovingPix(false));
        } else {
            dispatch(setMovingPix(true));
        }
    }
    return (
        <TopNavbar variant="dark" fixed="top">
            <NavbarBrand />
            <div className="d-flex align-items-center">
                {
                    location.pathname === "/my-pix" ? <>
                        <ResizeButton onClick={resize} $resizing={resizing}>
                            {resizing ? "Resizing" : "Resize"} <BoundingBox style={{ marginLeft: "10px" }} />
                        </ResizeButton>
                        <MoveButton onClick={move} $moving={moving}>
                            {moving ? "Moving" : "Move"} <ArrowsMove style={{ marginLeft: "10px" }} />
                        </MoveButton>
                    </> : <></>
                }
            </div>
            <div className="d-flex align-items-center">
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