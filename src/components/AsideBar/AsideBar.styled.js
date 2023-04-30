import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/close.svg';
import { NavLink } from 'react-router-dom';


export const Aside = styled.aside`
  @media (max-width: 1279px) {
    position: absolute;
    background-color: ${props => props.theme.asideBarBackground};
    z-index: 2;

    transition: ${props => props.theme.defaultTransition};
    @media (min-width: 768px) {
      width: 290px;
    }
    @media (min-width: 1280px) {
      z-index: 1;
      position: relative;
    }
  }

  height: 100vh;
  width: 290px;
  background-color: ${props => props.theme.asideBarBackground};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 250ms;

  p {
    font-family: 'InterSemiBoltMinSize';
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
  cursor: pointer;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const IconClose = styled(Icon)`
  stroke: ${props => props.theme.assideBarCloseIconColor};
  box-shadow: none;
  height: 24px;
  width: 24px;
  @media (min-width: 768px) {
    height: 33px;
    width: 33px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  line-height: 19px;
  font-family: 'InterSemiBolt';
  width: 100%;
  height: 100%;
  display: block;
  padding: 16px 20px;
  border-radius: 8px;
  transition: ${props => props.theme.defaultTransition};
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
    transition: ${props => props.theme.defaultTransition};
  }
  &.active svg {
    stroke: ${props => props.theme.asideBarIconActive};
    transition: ${props => props.theme.defaultTransition};
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
  transition: ${props => props.theme.defaultTransition};
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.7);
  }
`;


