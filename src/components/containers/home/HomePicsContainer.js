import styled from "styled-components"
import baker from '../../../static/baker.jpg'
import adams from '../../../static/adams.jpg'
import rainier from '../../../static/rainier.jpg'
import hood from '../../../static/hood.jpg'

const HomePicsContainerDiv = styled.div`
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: transparent;
`; 

const HomePicGridItem = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    width: 135px;
    height: 135px;
    display: block;  
    flex: 45%;
    border-radius: 5px;
    margin: 1px;
    opacity: 0.9;
`; 

export default function HomePicsContainer() {
    return (
        <HomePicsContainerDiv>
            <HomePicGridItem image={baker} />
            <HomePicGridItem image={adams} />
            <HomePicGridItem image={rainier} />
            <HomePicGridItem image={hood} />
        </HomePicsContainerDiv>
    )
}