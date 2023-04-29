import styled from 'styled-components';

export const Toggler = styled.label`
  display: inline-flex;
  cursor: pointer;
  transition: ${props => props.theme.defaultTransition};
`;

export const Checkbox = styled.input`
  display: none;
`;
