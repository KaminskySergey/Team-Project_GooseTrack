import { useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/auth/selectors';

import { Name, ImgWrapper, Avatar, NameFirstLetter } from './UserInfo.styled';

// import test_avatar from 'images/account/test_avatar.jpg';

export const UserInfo = () => {
  const userInfo = useSelector(selectUserInfo);

  if (!userInfo) {
    return;
  }

  const userNameTSpit = userInfo.name.split('');
  const firstLeterOfUserName = userNameTSpit[0].toUpperCase();

  return (
    <>
      <Name>{userInfo.name}</Name>
      <ImgWrapper>
        {userInfo.avatarURL !== '' ? (
          <Avatar src={userInfo.avatarURL} alt="avatar" />
        ) : (
          <NameFirstLetter>{firstLeterOfUserName}</NameFirstLetter>
        )}
      </ImgWrapper>
    </>
  );
};
