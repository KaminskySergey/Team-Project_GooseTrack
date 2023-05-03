import styled from 'styled-components';
import { ReactComponent as Close } from 'images/svg/closeModal.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.mainBackgroundColor};

  @media (min-width: 375px) {
    width: 300px;
    /* height: 50%; */
  }
  @media (max-width: 1279px) {
    /* width and height */
  }
  @media (min-width: 768px) {
    width: 396px;
    height: 360px;
    padding: 40px 28px;
  }
`;

export const CloseModal = styled(Close)`
  position: absolute;
  top: 19px;
  right: 19px;
  transition: all 250ms;
  cursor: pointer;

  stroke: ${props => props.theme.buttonAddTaskColor};

  &:hover,
  &:focus {
    stroke: ${props => props.theme.buttonBackgroundColor};
  }
`;
