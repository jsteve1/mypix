import { Resizable } from 'react-resizable';
import { useState } from 'react';
import styled from 'styled-components';
const PictureDiv = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`; 

export default function PictureBlock({ img }) {
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(500);
    const onResize = (event, { node, size, handle}) => {
        setWidth(size.width);
        setHeight(size.height);
    }
    return (
        <Resizable height={height} width={width} onResize={onResize}>
            <PictureDiv className="box" width={width} height={height} img={img} />
        </Resizable>
    )
}