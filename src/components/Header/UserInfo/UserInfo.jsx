import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import { selectUserInfo } from 'redux/auth/selectors';
import { selectUserInfo } from 'redux/user/selectors';
import { fetchUser } from 'redux/user/operations';

import { Name, ImgWrapper, Avatar, NameFirstLetter } from './UserInfo.styled';

export const UserInfo = () => {
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

  if (!userInfo) {
    return;
  }

  const userNameTSpit = userInfo.name.split('');
  const firstLeterOfUserName = userNameTSpit[0].toUpperCase();

  const { name, avatarURL } = userInfo;
  return (
    <>
      {name ? <Name>{name}</Name> : <Name>User</Name>}

      <ImgWrapper>
        {avatarURL !== '' ? (
          <Avatar src={avatarURL} alt="avatar" />
        ) : (
          <NameFirstLetter>{firstLeterOfUserName}</NameFirstLetter>
        )}
      </ImgWrapper>
    </>
  );
};
