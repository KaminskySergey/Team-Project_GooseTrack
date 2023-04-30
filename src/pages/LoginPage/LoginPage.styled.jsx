import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const Сontainer = styled.div`
  min-height: 100vh;
  background: #dcebf7;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 368px;
    height: 522px;
    position: absolute;
    bottom: 18px;
    right: 60px;
  }
`;

export const Text = styled.div`
  width: 140px;
  font-family: 'InterSemiBolt';
  font-weight: 600;
  position: absolute;
  top: 43px;
  right: 77px;
  font-size: 14px;
  line-height: 1.15;
  color: black;
  z-index: 2;
  transform: rotate(15deg);
`;
