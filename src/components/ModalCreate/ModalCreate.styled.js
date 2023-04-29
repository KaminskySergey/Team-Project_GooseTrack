import styled from "styled-components";
import { ReactComponent as Close } from 'images/svg/closeModal.svg';

export const Backdrop = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    `

export const Modal = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.mainBackgroundColor};
    @media (min-width: 375px) {
        width: 90%;
        height: 50%;
    }
    @media (max-width: 1279px) {
        /* width and height */
    }
    @media (min-width: 1280px) {
        width: 396px;
        height: 360px;
        padding: 40px 28px;
    }
    `

    export const CloseModal = styled(Close)`
    position: absolute;
    top: 19;
    right: 19;
    transition: all 250ms;
    cursor: pointer;
    stroke: rgb(62, 133, 243);
    

        &:hover path, &:focus path{
        stroke: rgb(62, 133, 243);
    }
    
    `