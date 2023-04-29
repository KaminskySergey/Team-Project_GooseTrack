import { Field } from 'formik';
import styled from 'styled-components';
import { ReactComponent as EditModal } from 'images/svg/editModal.svg';

import { Button, FormControlLabel, RadioGroup, Radio } from '@mui/material';

export const Label = styled(Field)``;

export const TitleInput = styled.p`
  margin-bottom: 8px;
  font-family: 'InterNormal';
  font-size: 12px;
  color: rgba(52, 52, 52, 0.8);
`;

export const StyledInput = styled(Field)`
  height: 46px;
  outline: none;

  &.input {
    border: none;
    margin-bottom: 18px;
  }
`;

export const StyledTextField = styled.input`
  height: 46px;
  background-color: #f7f7f7;
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 14px 0;
  padding-left: 18px;
  font-family: 'InterNormal';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #616161;
  transition: 250ms all;
  &:hover,
  &:focus {
    outline: 1px solid rgb(62, 133, 243);
  }
`;

export const StyledInputTime = styled(Field)`
  height: 46px;
  outline: none;

  &.input {
    border: none;
    margin-bottom: 18px;
  }
`;

export const StyledTextFieldTime = styled.input`
  height: 46px;
  background-color: #f7f7f7;
  border-radius: 8px;
  border: none;
  width: 163px;
  padding: 14px 0;
  padding-left: 18px;
  font-family: 'InterNormal';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #616161;
  transition: 250ms all;
  &:hover,
  &:focus {
    outline: 1px solid rgb(62, 133, 243);
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  margin: 0 !important;

  span {
    padding: 0;

    font-family: 'InterSemiBolt';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    color: #616161;
    /* svg {
      width: 10px;
      height: 10px;
      margin: 2px;
    } */
  }
`;
// export const StyledRadioBlau = styled(Radio)`
//   svg {
//     fill: #72c2f8;
//     background-color: #72c2f8;
//     border-radius: 50%;
//   }
// `;
// export const StyledRadioYellow = styled(Radio)`
//   svg {
//     fill: #f3b249;
//     background-color: #f3b249;
//     border-radius: 50%;
//   }
// `;
// export const StyledRadioRed = styled(Radio)`
//   svg {
//     fill: #ea3d65;
//     background-color: #ea3d65;
//     border-radius: 50%;
//   }
// `;
export const ButtonForm = styled(Button)`
  width: 100%;
  height: 48px;
  padding-top: 14px;
  padding-bottom: 16px;
  font-family: 'InterNormal';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize !important;
  border-radius: 8px !important;

  color: #ffffff;
`;
export const Edit = styled(EditModal)`
  width: 14.5px;
  height: 14.5px;
  margin-right: 10px;
`;
