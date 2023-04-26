import { useLocation } from 'react-router';
import { Wrapper, Container, Menu, Title } from './Header.styled';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => {
  const location = useLocation();

  let pageTitle = '';

  switch (location.pathname) {
    case '/account':
      pageTitle = 'User Profile';
      break;

    case '/calendar':
      pageTitle = 'Calendar';
      break;

    default:
      pageTitle = 'Title';
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
