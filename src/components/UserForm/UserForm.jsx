import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Wrapper, Label, Input, Button, Title, AccountForm, Wrap } from '.';
import { AvatarUploader } from 'components/AvatarUploader';
const regex = {
  name: /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/,
  email:
    /(^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@[a-z]{5}\.[a-z]{2,}(\.[a-z]{2,})?)$)/,
  phone:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};

const userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(regex.name)
    .min(3, 'At least 3 digits is required')
    .max(50, 'At most 50 digits is required')
    .required('User name is required'),
  birthday: Yup.string().required(),
  email: Yup.string().email().matches(regex.email).required(),
  phone: Yup.string()
    .matches(regex.phone)
    .min(7, 'At least 7 digits is required')
    .max(20, 'At most 15 digits is required'),
  skype: Yup.string()
    .min(3, 'At least 3 digits is required')
    .max(50, 'At most 50 digits is required'),
});

export const UserForm = () => {
  const [userName, setUserName] = useState('Freddie Mercury');
  const [data, setData] = useState({
    name: userName,
    birthday: '',
    email: '',
    phone: '',
    skype: '',
  });
  const { name, birthday, email, phone, skype } = data;

  const initialValues = { name, birthday, email, phone, skype };

  const handleSubmit = (values, { resetForm }) => {
    console.log('form: ', values);
    setData(values);
  };

  const handleChangeName = evt => {
    if (evt.target.name !== 'name') {
      return;
    }
    console.log('name :>> ', evt.target.value);
    setUserName(evt.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <AccountForm onChange={handleChangeName}>
        <AvatarUploader />
        <Title>{userName}</Title>

        <Wrap>
          <Wrapper>
            <Label>
              User Name
              <Input type="text" name="name" />
            </Label>
            <Label>
              Birthday
              <Input type="date" name="birthday" />
            </Label>
            <Label>
              Email
              <Input type="email" name="email" placeholder="freddie@mail.com" />
            </Label>
          </Wrapper>
          <Wrapper>
            <Label>
              Phone
              <Input
                type="phone"
                name="phone"
                placeholder="+38 (098) 666-55-44"
              />
            </Label>
            <Label>
              Skype
              <Input
                type="text"
                name="skype"
                placeholder="Add a skype number"
              />
            </Label>
          </Wrapper>
        </Wrap>
        <Button type="submit">Save changes</Button>
      </AccountForm>
    </Formik>
  );
};
