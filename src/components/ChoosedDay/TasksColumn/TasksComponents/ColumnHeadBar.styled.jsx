import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  max-width: 301px;
`;

export const ColumnTitle = styled.h3`
  font-family: 'InterSemiBolt';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: ${p => p.theme.colors.text};

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
export const BtnAdd = styled.button`
  border: none;
  background-color: transparent;
`;
