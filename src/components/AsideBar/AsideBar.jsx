// import {} from './RegisterForm.styled';


import Box from 'components/Box/Box';
import {logo, user, calendarCheck} from '../../images/svg/index'
import { Aside, Item, Link, Button, UserSvg } from "./AsideBar.styled";
import Icon from './Icon/Icon';




const AsideBar = () => {
  
  return (
    <>
    <Aside>
        
        <div>
          <Box mb={32}>
          <Icon id='logo'/>
          </Box>
          
          <p>User Panel</p>
            <nav >
              <Item>
                  <Link  to="">
                    
                    <Icon id='user'/>
                    <span style={{marginLeft: '10px'}}>My account</span>
                  </Link>
  
              </Item>
              <Item>
                  
                  <Link  to="/calendar">
                  <Icon id='calendarCheked'/>
                    <span style={{marginLeft: '10px'}}>Calendar</span>
                    </Link>
              </Item>
            </nav>
        </div>
          
          <div>
            <Button type="button">
            <span style={{marginRight: 11}}>Log out</span>
            <Icon id='logout'/>
            </Button>
          </div>
        
      </Aside>
    </>
  );
};

export default AsideBar;