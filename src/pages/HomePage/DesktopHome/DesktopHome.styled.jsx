import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const HeroHeader = styled.div`
  background-color: #3e85f3;
  height: 1024px;
`;

export const LogoContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 321px;
`;

export const LogoText = styled.p`
  font-family: 'coolveticaItalic';
  font-weight: 400;
  line-height: 150px;
  margin-top: 2px;
  font-size: 120px;
  color: white;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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
  text-decoration: underline;
  text-underline-offset: 4px;

  :hover,
  :focus {
    color: black;
  }
`;

export const MainContainer = styled.section`
  padding-left: 128px;
  padding-right: 128px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const AboutContainer = styled.div`
  width: 1107px;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
`;

export const AboutContainerReverse = styled.div`
  width: 1107px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 64px;
`;

export const Description = styled.div`
  margin-left: 77px;
`;

export const DescriptionReverse = styled.div`
  margin-right: 77px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BenefitNumber = styled.p`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 104px;
  color: #3e85f3;
`;

export const AdvantageColor = styled.h2`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 40px;
  margin-top: 14px;
  margin-bottom: 8px;
  text-transform: uppercase;
  width: 264px;
  padding: 6px 16px;
  border-radius: 44px;

  padding: 8px 16px;
  background-color: '#dcebf7';
  color: #3e85f3;
`;

export const AdvantageItem = styled.h2`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 40px;
  display: block;
  margin-top: 14px;
  margin-bottom: 24px;
  text-transform: uppercase;
  color: black;
`;

export const Advantage = styled.h2`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 40px;
  margin-top: 14px;
  margin-bottom: 24px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  color: Black;
`;

export const AboutText = styled.p`
  font-family: 'InterSemiBolt';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 48px;

  width: 275px;

  color: black;
`;
