import {  Field } from 'formik';
import styled from 'styled-components';

export const Radio = styled(Field)`

     appearance: none;
     margin: 0;
     font: inherit;
     color: currentColor;
     width: 1.15em;
     height: 1.15em;
     border: 0.15em solid currentColor;
     border-radius: 50%;
     transform: translateY(-0.075em);
     background-color: #fff;
     display: grid;
  place-content: center;
  &::before{
    content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em '#465645';
  }
  &:checked::before {
  transform: scale(1);
}
 
`