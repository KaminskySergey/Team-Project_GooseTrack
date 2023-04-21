import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RedirectLink = styled(NavLink)`
  border: 1px solid black;

  :hover,
  :focus {
    background-color: #290b78;
    color: white;
  }
`;

export const container = styled.div`
  background-color: green;
`;
