import styled from 'styled-components';

export const Box = styled.ul`
  display: flex;
  justify-content: space-between;
  transition: ${props => props.theme.defaultTransition};
  width: 62px;
  li {
    svg {
      stroke: ${props => props.theme.mainTextColor};
    }
  }

  @media (min-width: 768px) {
    width: 68px;
  }
`;
