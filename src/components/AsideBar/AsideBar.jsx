// import {} from './RegisterForm.styled';

import Box from 'components/Box/Box';

import { Aside, Item, Link, Button, ButtonClose } from './AsideBar.styled';
import Icon from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { ReactComponent as Logo } from '../../images/svg/logo.svg';

const AsideBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());
  
  return (
    <>
      <Aside>
        <div>
          <Box  mb={32} display='flex' alignItems='center' justifyContent='spaceBeween' >
            <Box display='flex' alignItems='center'>
              <Logo style={{ width: '71px', height: '68px' }} />
              <p style={{fontFamily: 'coolveticaItalic', fontSize: 24, marginBottom: 0, marginLeft: 10, color: '#3E85F3'}}>G<span style={{fontStyle: 'italic'}}>oo</span>seTrack</p>
            </Box>
          <ButtonClose type='buton' >
            {/* {!isDesktop && <Icon id='close' width={24} height={24} color='#343434'/>} */}
          </ButtonClose>
          </Box>

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
