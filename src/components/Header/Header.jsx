import { useLocation } from 'react-router';
import {
  Container,
  Menu,
  Title,
  GooseIcon,
  Motivation,
  Accent,
  BurgerButton,
  BurgerIcon,
} from './Header.styled';
import Box from 'components/Box/Box';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';
import { useResponce } from 'hooks/responce/useResponce';

export const Header = ({ onSidebarShow }) => {
  const { isDesktopOrLaptop } = useResponce();
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
      <Container>
        <Box display="flex" alignItems="center" gap="8px">
          {!isDesktopOrLaptop && (
            <BurgerButton type="button" onClick={() => onSidebarShow()}>
              <BurgerIcon />
            </BurgerButton>
          )}
          {isDesktopOrLaptop && (
            <>
              <GooseIcon />
              <div>
                <Title>{pageTitle}</Title>
                <Motivation>
                  <Accent>Let go</Accent> of the past and focus on the present!
                </Motivation>
              </div>
            </>
          )}
        </Box>
        <Menu>
          <ThemeToggler />
          <UserInfo />
        </Menu>
      </Container>
    </>
  );
};
