import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// import { MainLayout } from 'components/MainLayout';

import {  Go, Main, Item } from './Layout.styled';
// import { useAuth } from 'hooks/useAuth';
import { Aside, Container, List } from './Layout.styled';
import Box from 'components/Box/Box';

export const Layout = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <>
    <Go>
    <Main>
    <Container style={{display: 'flex'}}>
      <Aside>
        {/* <nav > */}
        <p>User Panel</p>
          <List >
            <Item>
        <Link to="">My account</Link>

            </Item>
            <Item>

        <Link to="">Calendar</Link>
            </Item>
          </List>
          {/* <Link to="/products">Products</Link> */}
        {/* </nav> */}
      </Aside>
      <Box style={{backgroundColor: '#EAEAEA', width: '100%', height: '100%'}}>
      <Suspense>
        <Outlet />
      </Suspense>
      </Box>
    </Container>
    </Main>

    </Go>
    </>
  );
};
