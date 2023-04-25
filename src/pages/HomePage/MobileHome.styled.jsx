import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const HeroHeader = styled.div`
  background-color: ${props => props.theme.colors.hero};
  height: 812px;
`;

export const LogoContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 232px;
`;

export const LogoText = styled.p`
  font-family: 'coolveticaItalic';
  font-size: 44;
  margin-top: 2px;
  color: ${props => props.theme.colors.white};
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const RedirectLinkLogin = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${props => props.theme.colors.white};
  padding: 16px 29px;
  border-radius: 16px;
  color: ${props => props.theme.colors.hero};
  font-family: 'InterSemiBolt';
  font-weight: 600;

  :hover,
  :focus {
    background-color: #290b78;
    color: white;
  }
`;

export const RedirectLinkRegister = styled(NavLink)`
  border: none;
  background-color: none;
  padding: 16px 29px;
  font-size: 14;
  color: ${props => props.theme.colors.white};
  font-family: 'InterSemiBolt';
  font-weight: 600;
  margin-top: 208px;
  text-decoration: underline;
  text-underline-offset: 4px;

  :hover,
  :focus {
    color: ${props => props.theme.colors.text};
  }
`;

export const MainContainer = styled.section`
  padding-left: 20px;
  padding-right: 20px;
`;

export const AboutContainer = styled.div`
  display: block;
  align-items: center;
  margin-top: 64px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
