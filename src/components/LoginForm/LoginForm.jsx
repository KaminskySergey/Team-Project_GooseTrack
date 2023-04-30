import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Formik, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { login } from '../../redux/auth/authOperations';
import { LoginValidSchema } from './LoginValidSchema';

import { ReactComponent as ShowIcon } from 'images/svg/show.svg';
import { ReactComponent as HideIcon } from 'images/svg/hide.svg';
import { ReactComponent as IconButton } from 'images/svg/buttonLogReg.svg';

import {
  Form,
  TitleForm,
  Label,
  Input,
  Error,
  ToggleHidePassword,
  Password,
  Button,
} from './LoginForm.styled';

import { useFormik } from 'formik';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: LoginValidSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const actionResult = await dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        );
        if (actionResult) {
          toast.success('Success');
          navigate('/calendar/month');
          setSubmitting(false);
          resetForm();
        }
      } catch (e) {
        toast.error('Login or password wrong');
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TitleForm>Log in</TitleForm>

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="nadiia@gmail.com"
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
          placeholder="**********"
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

      <Button type="submit">
        Log in
        <IconButton
          style={{ width: '13px', height: '13px', marginLeft: '13px' }}
        />
      </Button>
    </Form>
  );
};
