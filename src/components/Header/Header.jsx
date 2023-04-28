import { useLocation } from 'react-router';
import { Container, Menu, Title } from './Header.styled';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = ({ onSidebarShow }) => {
  const { pathname } = useLocation();
  let pageTitle = '';
  const words = pathname.split('/');
  const title = words.find(word => word === 'calendar' || word === 'account');

  switch (title) {
    case 'calendar':
      pageTitle = 'Calendar';
      break;
    case 'account':
      pageTitle = 'User Profile';
      break;
    default:
      pageTitle = 'Title';
      break;
  }

  return (
    <>
      {/* <Wrapper> */}
      <Container>
        <Title>{pageTitle}</Title>
        <Menu>
          <ThemeToggler />
          <UserInfo />
        </Menu>
      </Container>
      {/* </Wrapper> */}
    </>
  );
};
