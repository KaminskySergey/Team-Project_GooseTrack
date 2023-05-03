import styled from 'styled-components';
import { ReactComponent as ToDark } from 'images/svg/toggleToDark.svg';
import { ReactComponent as ToLight } from 'images/svg/toggleToLight.svg';

export const Toggler = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ${props => props.theme.defaultTransition};
`;

export const Checkbox = styled.input`
  display: none;
`;

export const ToggleToDark = styled(ToDark)`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ToggleToLight = styled(ToLight)`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
