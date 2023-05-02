import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  column-gap: 50px;
  align-items: center;
  max-width: 100%;
  margin-top: 40px;

  @media (min-width: 960px) {
    margin-bottom: 44px;
  }

  @media (min-width: 1150px) {
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 100%;
`;

export const UploadImage = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  border: 1px solid red;
`;

export const Input = styled(Field)`
  height: 42px;
  border-radius: 8px;
  border-width: 1px;
  padding: 0 14px;
  border-color: ${props => props.theme.inputBorder};
  background-color: transparent;
  color: ${props => props.theme.inputText};
  transition: ${props => props.theme.defaultTransition};
  font-family: 'InterSemiBolt';
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);

  &::placeholder {
    color: ${props => props.theme.inputText};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc((18 / 16) * 100%);
  }
`;

export const FieldImg = styled(Field)`
  width: 40px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 195px;
  height: 46px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  /* margin: 40px auto; */
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  background-color: ${props => props.theme.buttonBackgroundColor};
  color: ${props => props.theme.buttontextColor};
  transition: ${props => props.theme.defaultTransition};
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.buttonBackgroundColorHover};
  }
  @media (min-width: 960px) {
    margin-top: 88px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 20px;
  /* margin-bottom: 40px; */
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  transition: ${props => props.theme.defaultTransition};
  color: ${props => props.theme.mainTextColor};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: calc((18 / 18) * 100%);
  }
`;

export const AccountForm = styled(Form)`
  padding: 40px 18px;
  transition: ${props => props.theme.defaultTransition};
  background-color: ${props => props.theme.mainBackgroundColor};
  border-radius: 16px;
  height: 100%;

  @media (min-width: 960px) {
    padding: 60px 18px;
  }
`;
