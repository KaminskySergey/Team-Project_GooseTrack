import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import { register } from 'redux/auth/authOperations';
import { ReactComponent as ShowIcon } from 'images/svg/show.svg';
import { ReactComponent as HideIcon } from 'images/svg/hide.svg';
import { ReactComponent as IconButton } from 'images/svg/buttonLogReg.svg';

import { RegisterValidSchema } from './RegisterValidSchema';

import {
  Form,
  TitleForm,
  Label,
  Input,
  Error,
  Button,
  Password,
  ToggleHidePassword,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isError } = useAuth();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterValidSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );

      resetForm();
      if (!isError) {
        navigate('/login');
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TitleForm>Sign Up</TitleForm>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />

      {formik.touched.name && formik.errors.name ? (
        <Error>{formik.errors.name}</Error>
      ) : null}

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <Error>{formik.errors.email}</Error>
      ) : null}

      <Label htmlFor="password">Password</Label>

      <Password>
        <Input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <ToggleHidePassword type="button" onClick={handleShowPassword}>
          {showPassword ? (
            <ShowIcon style={{ marginLeft: '10px' }} />
          ) : (
            <HideIcon style={{ marginLeft: '10px' }} />
          )}
        </ToggleHidePassword>
      </Password>

      {formik.touched.password && formik.errors.password ? (
        <Error>{formik.errors.password}</Error>
      ) : null}

      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        Sign Up
        <IconButton
          style={{ width: '13px', height: '13px', marginLeft: '13px' }}
        />
      </Button>
    </Form>
  );
};
