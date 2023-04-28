import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const HeroHeader = styled.div`
  background-color: #3e85f3;
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
  font-weight: 400;
  font-size: 44px;
  line-height: 48px;
  margin-top: 2px;
  color: white;
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
  background-color: white;
  padding: 16px 29px;
  border-radius: 16px;
  color: #3e85f3;
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
  color: white;
  font-family: 'InterSemiBolt';
  font-weight: 600;
  margin-top: 208px;
  text-decoration: underline;
  text-underline-offset: 4px;

  :hover,
  :focus {
    color: black;
  }
`;

export const MainContainer = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  /* align-items: center;
  display: flex;
  flex-direction: column; */
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

export const AdvantageNumber = styled.p`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 80px;
  color: #3e85f3;
`;

export const AdvantageColor = styled.h2`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 32px;
  margin-top: 14px;
  margin-bottom: 8px;

  text-transform: uppercase;
  width: 214px;
  padding: 8px 16px;
  border-radius: 44px;

  padding: 8px 16px;
  background-color: #dcebf7;
  color: #3e85f3;
`;

export const AdvantageItem = styled.span`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 32px;
  margin-bottom: 14px;
  display: block;
  text-transform: uppercase;
  color: black;
`;

export const Advantage = styled.h2`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 32px;
  margin-top: 14px;
  margin-bottom: 14px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  color: black;
`;

export const AboutText = styled.p`
  font-family: 'InterSemiBolt';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 40px;

  color: black;
`;
