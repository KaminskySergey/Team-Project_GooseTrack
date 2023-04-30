import styled from 'styled-components';
import { ReactComponent as GooseMotivator } from 'images/svg/gooseMotivator.svg';
import { ReactComponent as Icon } from 'images/svg/menuBurger.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0, auto;
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 1280px) {
    display: none;
  }
`;
export const BurgerIcon = styled(Icon)`
  width: 34px;
  height: 34px;
  stroke: ${props => props.theme.headerBurgerIcon};
  transition: ${props => props.theme.defaultTransition};
  &:hover,
  &:focus {
    stroke: ${props => props.theme.buttonBackgroundColorHover};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const GooseIcon = styled(GooseMotivator)`
  @media (max-width: 1279px) {
    display: none;
  }

  display: inline-flex;
  width: 64px;
  height: 60px;
  margin-right: 8px;
`;

export const Title = styled.h2`
  @media (max-width: 1279px) {
    display: none;
  }

  margin-bottom: 8px;
  font-family: 'InterBolt';
  font-size: 32px;
  line-height: calc((32/ 32) * 100%);
  color: ${props => props.theme.mainTextColor};
`;

export const Motivation = styled.p`
  @media (max-width: 1279px) {
    display: none;
  }

  font-family: 'InterSemiBolt';
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  color: ${props => props.theme.mainTextColor};
`;

export const Accent = styled.span`
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  color: ${props => props.theme.accentColor};
`;
