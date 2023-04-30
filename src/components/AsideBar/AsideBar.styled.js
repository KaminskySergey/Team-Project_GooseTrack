import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/close.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../images/svg/logo.svg';


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
  transition: ${props => props.theme.defaultTransition};
`;

export const Logo = styled(LogoIcon)`
  height: 35px;
  width: 36px;
  margin-right: 6px;

  @media (min-width: 768px) {
    height: 58px;
    width: 60px;
  }

  @media (min-width: 1280px) {
    height: 68px;
    width: 71px;
    margin-right: 10px;
  }
`;

export const LogoText = styled.p`
  font-family: 'coolveticaItalic';
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 0;

  color: ${props => props.theme.asideBarLogoText};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 24px;
  }
`;
export const PanelTitle = styled.p`
  font-family: 'InterSemiBolt';
  font-size: 12px;
  line-height: 15px;
  color: ${props => props.theme.asideBarTitle};
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
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
  border: none;
  background: transparent;
  margin-left: auto;
  cursor: pointer;
  padding: 0;

  @media (min-width: 1280px) {
    display: none;
  }

`;

export const IconClose = styled(Icon)`
  stroke: ${props => props.theme.assideBarCloseIconColor};
  box-shadow: none;
  height: 24px;
  width: 24px;
  transition: ${props => props.theme.defaultTransition};
  @media (min-width: 768px) {
    height: 33px;
    width: 33px;
  }
  &:hover,
  &:focus {
    stroke: ${props => props.theme.buttonBackgroundColorHover};
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
  background: ${props => props.theme.buttonBackgroundColor};
  box-shadow: ${props => props.theme.buttonShadow};
  border: none;
  border-radius: 16px;
  color: ${props => props.theme.buttontextColor};
  cursor: pointer;
  line-height: 24px;
  font-family: "InterSemiBolt";
  transform: scale(1);
  transition: ${props => props.theme.defaultTransition};
  &:hover,
  &:focus {
    background: ${props => props.theme.buttonBackgroundColorHover};
  }
`;


