import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from 'redux/auth/selectors';

import { Name, ImgWrapper, Avatar, NameFirstLetter } from './UserInfo.styled';

// import test_avatar from 'images/account/test_avatar.jpg';

export const UserInfo = () => {
  const userInfo = useSelector(selectUserInfo);

  const [userAvatar, setUserAvatar] = useState("");
  const [username, setUsername] = useState('');
  

  const dispatch = useDispatch();
  
  if (!userInfo) {
    return
  }

  return (
    <>
      <Name>{userInfo.name}</Name>
      <ImgWrapper>
        <Avatar src={userInfo.avatarURL} alt="avatar" />
        <NameFirstLetter></NameFirstLetter>
      </ImgWrapper>
    </>
  );
};

