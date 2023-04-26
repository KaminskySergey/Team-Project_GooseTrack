import { NavLink } from 'react-router-dom';

import styled from 'styled-components';




export const Aside = styled.aside`
  @media (max-width: 1279px) {
    /* display: none; */
    position: absolute;
    background-color: ${props => props.theme.mainBackgroundColor};
    z-index: 2;
    height: 95%;
  }

  @media (min-width: 1280px) {
  }
  /* height: 100%; */
  width: 290px;
  background-color: ${props => props.theme.mainBackgroundColor};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-family: InterSemiBoltMinSize;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 32px;
    color: ${props => props.theme.asideBarTitle};
  }
`;



export const Item = styled.li`

border-radius: 8px;
  width: 241px;
  height: 50px;
  
  &:not(:last-child){
    margin-bottom: 16px;
  }

`

export const ButtonClose = styled.button`
width: 24px;
height: 24px;
border: none;
background: transparent;
margin-left: auto;
`

export const Link = styled(NavLink)`
  font-size: 16px;
  line-height: 19px;
  font-family: 'InterSemiBolt';
  width: 100%;
  height: 100%;
  display: block;
  padding: 16px 20px;
  border-radius: 8px;
  transition: all 250ms;
  display: flex;
  align-items: center;
  color: ${props => props.theme.asideBarLinkText};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.asideBarLinkBackgroundHover};
  }
  &.active {
    background: ${props => props.theme.asideBarActiveLinkBackground};
    color: ${props => props.theme.asideBarActiveLinkText};
  }
  svg {
    stroke: ${props => props.theme.asideBarIcon};
  }
  &.active svg {
    stroke: ${props => props.theme.asideBarIcon};
  }
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 56px;
  background: ${props => props.theme.accentColor};
  box-shadow: ${props => props.theme.asideBarLogoutBtnShadow};
  border: none;
  border-radius: 16px;
  color: ${props => props.theme.secondaryTextColor};
  cursor: pointer;
  line-height: 24px;
  font-family: InterSemiBolt;
  transform: scale(1);
  transition: 250ms all;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.7);
  }
`;


