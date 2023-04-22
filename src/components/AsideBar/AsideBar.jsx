// import {} from './RegisterForm.styled';



import { Aside, Item, Link, Button } from "./AsideBar.styled";

const AsideBar = () => {
  return (
    <>
    <Aside>
        
        <div>
          <div>
          {/* logo */}
          </div>
          
          <p>User Panel</p>
            <nav >
              <Item>
                  <Link  to="">My account</Link>
  
              </Item>
              <Item>
  
                  <Link  to="/calendar">Calendar</Link>
              </Item>
            </nav>
        </div>
          
          <div>
            <Button type="button">
            Log Out
            </Button>
          </div>
        
      </Aside>
    </>
  );
};

export default AsideBar;