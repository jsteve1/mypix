import styled from "styled-components"
import baker from '../../../static/baker.jpg'
import adams from '../../../static/adams.jpg'
import rainier from '../../../static/rainier.jpg'
import hood from '../../../static/hood.jpg'

const HomePicsContainerDiv = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: transparent;
    overflow: hidden;
    justify-content: center;
`; 

const HomePicGridItem = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    width: auto;
    min-width: 100px;
    max-width: 135px;
    height: 135px;
    display: block;  
    flex: 1 0 auto;
    border-radius: 5px;
    margin: 1px;
    opacity: 0.9;
`; 


export default function HomePicsContainer() {
    return (
        <HomePicsContainerDiv>
         
        </HomePicsContainerDiv>
    )
}