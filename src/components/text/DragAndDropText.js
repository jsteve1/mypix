import styled from 'styled-components'; 

const DragAndDropTextDiv = styled.div`
    margin-top: 25px;
    font-size: 12pt;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #aaaaaa;
    border: 2px dashed #cccccc;
    padding: 15px;
    border-radius: 5px;
    opacity: 0.6;
`;

export default function DragAndDropText() {
    return (
        <DragAndDropTextDiv>
             Or drag 🤜 <br></br> and drop 💧 <br></br> your photo<br></br>anywhere
        </DragAndDropTextDiv>
    )
}