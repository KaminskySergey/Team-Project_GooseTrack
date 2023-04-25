import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { Wrapper, Button, Title, AccountForm, Wrap } from '.';
import { userShema } from 'schemas/userShema';
import { selectUserInfo } from 'redux/user/selectors';
import { fetchUser, updateUser } from 'redux/user/operations';
import { AvatarUploader } from 'components/AvatarUploader';
import { UserFild } from 'components/UserFild';

export const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      await dispatch(fetchUser());
      setIsLoading(false);
    };

    getUserInfo();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { name, birthday, email, phone, telegram } = userInfo;

  return (
    <Formik
      initialValues={{
        name: name,
        birthday: birthday
          ? new Date(birthday).toLocaleDateString('en-CA')
          : '',
        email: email,
        phone: phone,
        telegram: telegram,
      }}
      validationSchema={userShema}
      onSubmit={values => dispatch(updateUser(values))}
    >
      {({ values }) => (
        <AccountForm>
          <AvatarUploader />
          <Title>{values.name}</Title>
          <Wrap>
            <Wrapper>
              <UserFild title="User name" type="text" name="name" />
              <UserFild title="Birthday" type="date" name="birthday" />
              <UserFild title="Email" type="email" name="email" />
            </Wrapper>

            <Wrapper>
              <UserFild
                title="Phone"
                type="tel"
                name="phone"
                placeholder="Add phone number"
              />
              <UserFild
                title="Telegram"
                type="text"
                name="telegram"
                placeholder="Add a telegram nickname"
              />
            </Wrapper>
          </Wrap>
          <Button type="submit">Save changes</Button>
        </AccountForm>
      )}
    </Formik>
  );
};
