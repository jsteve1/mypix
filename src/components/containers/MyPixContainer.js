import { addPic, selectPics } from '../../app/picSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'; 
import HomeNavbar from '../navbar/HomeNavbar';
import MyPixGrid from './MyPixGrid';
import NoUploadsText from '../text/NoUploadsText';
import { useEffect, useRef } from 'react';

export const MyPixContainerDiv = styled.div`
    background: rgb(208,32,255);
    background: radial-gradient(circle, rgba(208,32,255,1) 0%, rgba(255,255,255,0.728538283062645) 0%, rgba(255,255,255,1) 0%, rgba(208,32,255,0.3113620448179272) 100%);
    height: 100vh;
    width: 100vw;
    padding-top: 80px;
`;

export default function MyPixContainer() {
    const pics = useSelector(selectPics);
    const contRef = useRef(null); 
    const dispatch = useDispatch();
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
      
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = [...e.dataTransfer.files];

        if (1 < files.length) {
            alert(`Only 1 file may be uploaded at a time`);
            return;
        }

        if( files[0].type !== 'image/jpeg' && 
            files[0].type !== 'image/png' && 
            files[0].type !== 'image/jpg' &&
            files[0].type !== 'image/gif' ) {
            alert(`Only .jpeg/.jpg, .gif, and .png files are allowed`);
            return;
        }

        if (files && files.length) {
          onUpload(files);
        }

    };

    const onUpload = (files) => {
        console.log(files[0]);
        const url = URL.createObjectURL(files[0]);
        dispatch(addPic(url)); 
    };

    useEffect(() => {
        contRef.current.addEventListener('dragover', handleDragOver);
        contRef.current.addEventListener('drop', handleDrop);
        return () => {
            contRef.current.removeEventListener('dragover', handleDragOver);
            contRef.current.removeEventListener('drop', handleDrop);
        };
    }, []); 

    return (
        <>
        <HomeNavbar />
        <MyPixContainerDiv ref={contRef}>
            {
                pics.length > 0 ? <MyPixGrid /> : <NoUploadsText />
            }
        </MyPixContainerDiv>
        </>
    )
}