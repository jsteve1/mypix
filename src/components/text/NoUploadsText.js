import styled from 'styled-components'; 
import AddPicButton from '../buttons/AddPicButton';

export const NoUploadsTextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #962DB9;
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%; 
    margin-top: 50px;
`; 

export default function NoUploadsText() {
    return (
        <>
        <NoUploadsTextDiv>
            No Pics Found 🤷‍♂️
        </NoUploadsTextDiv>
        <NoUploadsTextDiv>
            <AddPicButton />
        </NoUploadsTextDiv>
        </>
    )
}