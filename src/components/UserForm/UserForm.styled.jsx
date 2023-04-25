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
  padding: 0 14px;
  border-color: rgb(17 17 17 / 15%);
  color: #111111;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);

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
  background-color: #3e85f3;
  color: #ffffff;
  border: none;
  cursor: pointer;

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
  color: #343434;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: calc((18 / 18) * 100%);
  }
`;

export const AccountForm = styled(Form)`
  padding: 40px 18px;
  background-color: #ffffff;
  border-radius: 16px;
  height: 100%;

  @media (min-width: 960px) {
    padding: 60px 18px;
  }
`;
