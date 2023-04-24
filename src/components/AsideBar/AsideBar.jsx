// import {} from './RegisterForm.styled';

import Box from 'components/Box/Box';

import { Aside, Item, Link, Button } from './AsideBar.styled';
import Icon from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';

const AsideBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <Aside>
        <div>
          <Box mb={32}></Box>

          <p>User Panel</p>
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
