import styled from "styled-components";
import Masonry from 'react-masonry-css';
import { useState } from "react";
import adams from '../../../static/adams.jpg';
import baker from '../../../static/baker.jpg';
import hood from '../../../static/hood.jpg';
import rainier from '../../../static/rainier.jpg';
import borealis from '../../../static/borealis.jpg';
import moon from '../../../static/moon.jpg';
import nature from '../../../static/nature.jpg';
import river from '../../../static/river.jpg';
import waterfalls from '../../../static/waterfalls.jpg';
import trees from '../../../static/trees.jpg';
import lake from '../../../static/lake.jpg';

export const HomeBackgroundDiv = styled.div`
    padding-top: 60px;
    position: absolute;
    background-color: #191919;
    z-index: -10;
    max-width: 100vw;
    width: 100vw;
    top: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 1s ease;
    ${props => props.imagesLoaded ? "opacity: 1;" : "opacity: 0;"}}
`;

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

export default function HomeBackground() {
    const [imagesLoaded, setImagesLoaded] = useState(true);
    const [numberLoaded, setNumberLoaded] = useState(0);
    const setLoaded = () => {
        setNumberLoaded(numberLoaded + 1);
        if (numberLoaded >= 10) {
            setImagesLoaded(true);
        }
    }
    return (
        <>
            <style type="text/css">
            {
                `
                .my-masonry-grid {
                    display: -webkit-box; /* Not needed if autoprefixing */
                    display: -ms-flexbox; /* Not needed if autoprefixing */
                    display: flex;
                    margin-left: -30px; /* gutter size offset */
                    width: auto;
                }
                .my-masonry-grid_column {
                    padding-left: 10px; /* gutter size */
                    background-clip: padding-box;
                }
                .my-masonry-grid_column > img { /* change div to reference your elements you put in <Masonry> */
                    background: grey;
                    margin-bottom: 10px;
                }
                img {
                    width: stretch;
                    max-width: 100%;
                    min-width: 100px;
                    min-height: 100px;
                    object-fit: fill;
                }
                `
            }
            </style>
            <HomeBackgroundDiv imagesLoaded={imagesLoaded}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                        <img src={hood} alt="mthood" onLoad={setLoaded} />
                        <img src={nature} alt="naturepic" onLoad={setLoaded} />
                        <img src={baker} alt="mtbaker" onLoad={setLoaded} />
                        <img src={moon} alt="themoon" onLoad={setLoaded} />
                        <img src={trees} alt="trees" onLoad={setLoaded} />
                        <img src={rainier} alt="mtrainier" onLoad={setLoaded} />
                        <img src={borealis} alt="auroraborealis" onLoad={setLoaded} />
                        <img src={waterfalls} alt="waterfalls" onLoad={setLoaded} />
                        <img src={lake} alt="lakepic" onLoad={setLoaded} />
                        <img src={adams} alt="mtadams" onLoad={setLoaded} />
                        <img src={river} alt="riverpic" onLoad={setLoaded} />
                </Masonry>
            </HomeBackgroundDiv>
        </>
    )
}