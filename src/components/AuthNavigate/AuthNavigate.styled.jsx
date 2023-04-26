import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RedirectLink = styled(NavLink)`
  border: none;
  background-color: ${props => props.theme.colors.white};

  :hover,
  :focus {
    background-color: #290b78;
    color: white;
  }
`;
