import {  Field } from 'formik';
import styled from 'styled-components';
import { ReactComponent as EditModal } from 'images/svg/editModal.svg';

import { Button, FormControlLabel, RadioGroup, Radio } from '@mui/material';


export const Label = styled(Field)`
  
`;

export const TitleInput = styled.p`
margin-bottom: 8px;
font-family: 'InterNormal';
font-size: 12px;
color: rgba(52, 52, 52, 0.8);
`

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
  background-color: #F7F7F7;
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
&:hover, &:focus {
  
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
  background-color: #F7F7F7;
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
&:hover, &:focus {
  
  outline: 1px solid rgb(62, 133, 243);
}
  
  
  
`;


export const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;


`
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
  svg{
    width: 10px;
    height: 10px;
  }
}
`
export const StyledRadioBlau = styled(Radio)`
svg {
  fill: #72C2F8;
  background-color: #72C2F8;
  border-radius: 50%;
  
}
`
export const StyledRadioYellow = styled(Radio)`
svg {
  fill: #F3B249;
  background-color: #F3B249;
  border-radius: 50%;
}
`
export const StyledRadioRed = styled(Radio)`
svg {
  fill: #EA3D65;
  background-color: #EA3D65;
  border-radius: 50%;
}
`
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

color: #FFFFFF;
`
export const Edit = styled(EditModal)`
  width: 14.5px;
  height: 14.5px;
  margin-right: 10px;

`