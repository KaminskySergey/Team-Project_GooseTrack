import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RedirectLink = styled(NavLink)`
  font-family: 'InterSemiBolt';

  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  border: none;
  background-color: inherit;
  color: ${props => props.theme.accentColor};
  padding: 10px 10px;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  text-decoration: underline;
  text-underline-offset: 4px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  :hover,
  :focus {
    color: #290b78;
  }
`;
