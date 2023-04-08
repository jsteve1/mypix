import styled from "styled-components";
import Masonry from 'react-masonry-css';

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
`;

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  

/*     .item-a {
                    grid-row: 1 / 3;
                }
                
                .item-b {
                    grid-column: 1 / 4;
                }
                
                .item-c {
                    grid-row: 1 / 2;
                }
                
                .item-d {
                    grid-column: 1 / 3;
                }

*/

export default function HomeBackground() {
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
                
                /* Style your items */
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
            <HomeBackgroundDiv>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    <img src={hood} />
                    <img src={nature} />
                    <img src={baker} />
                    <img src={moon} />
                    <img src={trees} />
                    <img src={rainier} />     
                    <img src={borealis} />
                    <img src={waterfalls} />
                    <img src={lake} />
                    <img src={adams} />
                    <img src={river} />
            </Masonry>
            </HomeBackgroundDiv>
        </>
    )
}