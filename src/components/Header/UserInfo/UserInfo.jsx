import { useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/auth/selectors';

import { Name, ImgWrapper, Avatar, NameFirstLetter } from './UserInfo.styled';

export const UserInfo = () => {
  const userInfo = useSelector(selectUserInfo);

  if (!userInfo.name || !userInfo.name) {
    return;
  }

  const userNameTSpit = userInfo.name.split('');
  const firstLeterOfUserName = userNameTSpit[0].toUpperCase();

  return (
    <>
      {userInfo.name ? <Name>{userInfo.name}</Name> : <Name>User</Name>}

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
