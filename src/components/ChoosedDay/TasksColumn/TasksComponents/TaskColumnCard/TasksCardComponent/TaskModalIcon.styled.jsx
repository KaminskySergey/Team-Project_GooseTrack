import { ReactComponent as Move } from 'images/svg/iconMove.svg';

import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: -60px;
  right: ${props => (props.$listId === 'done' ? '75px' : '75px')};

  background-color: ${props => props.theme.mainBackgroundColor};
  transition: ${props => props.theme.defaultTransition};
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 115px;
  height: 80px;

  @media (min-width: 768px) {
    padding: 24px;
    width: 147px;
  }
`;

export const ListModalIcon = styled.ul`
  li {
    display: flex;

    justify-content: space-between;
    cursor: pointer;
    font-family: 'InterNormal';
    font-size: 12px;
    line-height: calc((14 / 12) * 100%);
    transition: ${props => props.theme.defaultTransition};
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    &:hover svg g path,
    &:focus svg g path {
      stroke: ${props => props.theme.mainTextColor};
    }
    &:hover p,
    &:focus p {
      color: ${props => props.theme.accentColor};
    }
    svg {
      g {
        path {
          stroke: ${props => props.theme.mainTextColor};
        }
      }
    }

    color: ${props => props.theme.mainTextColor};
  }
`;

export const MoveIconModal = styled(Move)`
  margin-left: 10px;
`;
