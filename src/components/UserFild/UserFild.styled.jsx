import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const MessageError = styled(ErrorMessage)`
  display: block;
  color: red;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 354px;
  font-family: 'InterNormal';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: calc((14 / 12) * 100%);
  color: ${props => props.theme.labelText};

  @media (min-width: 768px) {
    width: 354px;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
  }
`;
