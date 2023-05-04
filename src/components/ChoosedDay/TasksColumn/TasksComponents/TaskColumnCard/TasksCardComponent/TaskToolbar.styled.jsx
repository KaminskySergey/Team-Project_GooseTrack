import styled from 'styled-components';

export const Box = styled.ul`
  display: flex;
  justify-content: space-between;
  transition: ${props => props.theme.defaultTransition};
  width: 62px;
  li {
    svg {
      cursor: pointer;
      transition: all 250ms;
      transform: scale(1);
      stroke: ${props => props.theme.mainTextColor};

      :hover,
      :focus {
        transform: scale(1.1);
        stroke: ${props => props.theme.accentColor};
      }
    }
  }

  @media (min-width: 768px) {
    width: 68px;
  }
`;
