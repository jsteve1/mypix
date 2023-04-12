import { Resizable } from 'react-resizable';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../app/utils/useWindowSize';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import { selectMovingPix, selectResizingPix } from '../../app/uiSlice';

const PictureDiv = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`; 

export default function PictureBlock({ img }) {
    const resizingPics = useSelector(selectResizingPix);
    const movingPix = useSelector(selectMovingPix);
    const dimensions = useWindowSize(); 
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(500);

    const onResize = (event, { node, size, handle}) => {
        setWidth(size.width);
        setHeight(size.height);
    }

    useEffect(() => {
        const img = new Image(); 
        img.src = img;
        img.onload = () => {
            setWidth(img.width);
            setHeight(img.height);
        }
    }, [img]); 

    return (
        <>
        {
            resizingPics ?  <Resizable minConstraints={[50, 50]} maxConstraints={[dimensions.width, dimensions.height]} lockAspectRatio={true} height={height} width={width} onResize={onResize}>
                                <PictureDiv className="box handle" width={width} height={height} img={img} />
                            </Resizable> 
                            : 
                            <>
                            {
                                movingPix   ?
                                            <Draggable
                                                handle=".handle"
                                                defaultPosition={{x: 0, y: 0}}
                                                position={null}
                                                grid={[25, 25]}
                                                scale={1}>
                                                <PictureDiv className="box handle" width={width} height={height} img={img} />
                                            </Draggable> 
                                            : 
                                            <PictureDiv className="box handle" width={width} height={height} img={img} />
                            }
                            </>
                                    
        }
        </>
    )
}