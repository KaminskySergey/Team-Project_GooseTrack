import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 100%;
  background-color: red;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 375px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;
