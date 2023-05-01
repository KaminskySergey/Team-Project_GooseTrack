import { ReactComponent as Move } from '../../../../../../images/svg/iconMove.svg';

import styled from "styled-components";

export const Modal = styled.div`
position: absolute;
    top: 26px;
    left: 0;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
    z-index: 2;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 20px 24px;
   
    /* @media (min-width: 375px) {
        width: 90%;
        height: 50%;
    }
    @media (max-width: 1279px) {
        /* width and height */
    /* }  */
    @media (min-width: 1280px) {
        width: 147px;
        height: 90px;
        
    }
    `

export const ListModalIcon = styled.ul`
li {
    display: flex;
    cursor: pointer;
font-family: 'InterNormal';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
transition: all 250ms;
&:hover svg g path, &:focus svg g path{
    stroke: #3E85F3;
}
&:hover p, &:focus p{
    color: #3E85F3;
}
svg { 
    g {
        path {
        stroke: #616161;
    }}
    }

color: #616161;

}
`

export const MoveIconModal = styled(Move)`
margin-left: 10px;


`