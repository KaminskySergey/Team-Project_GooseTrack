// import {} from './RegisterForm.styled';

import Box from 'components/Box/Box';

import {
  Aside,
  Item,
  Link,
  Logo,
  LogoText,
  PanelTitle,
  Button,
  ButtonClose,
  IconClose,
} from './AsideBar.styled';
import Icon from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';


const AsideBar = ({ onSidebarShow }) => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <Aside>
        <div>
          <Box
            mb={64}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Logo />
              <LogoText>
                G<span style={{ fontStyle: 'italic' }}>oo</span>seTrack
              </LogoText>
            </Box>
            <ButtonClose type="buton" onClick={() => onSidebarShow()}>
              <IconClose />
            </ButtonClose>
          </Box>

          <PanelTitle>User Panel</PanelTitle>
          <nav>
            <Item>
              <Link to="/account">
                <Icon id="user" />
                <span style={{ marginLeft: '10px' }}>My account</span>
              </Link>
            </Item>
            <Item>
              <Link to="/calendar">
                <Icon id="calendarCheked" />
                <span style={{ marginLeft: '10px' }}>Calendar</span>
              </Link>
            </Item>
          </nav>
        </div>

        <div>
          <Button type="button" onClick={handleLogout}>
            <span style={{ marginRight: 11 }}>Log out</span>
            <Icon id="logout" />
          </Button>
        </div>
      </Aside>
    </>
  );
};

export default AsideBar;
