import styled from 'styled-components';

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
