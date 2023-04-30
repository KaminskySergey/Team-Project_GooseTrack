import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';

import { Wrapper, Main, Box } from './Layout.styled';
import { useAuth } from 'hooks/useAuth';
import { Container } from './Layout.styled';

import AsideBar from '../AsideBar/AsideBar';
import { Header } from '../Header/Header';
import { useResponce } from 'hooks/responce/useResponce';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  const { isDesktopOrLaptop } = useResponce();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  const onSidebarShow = () => {
    setSideBarIsVisible(state => !state);
  };

  return (
    <>
      <Wrapper>
        <main>
          <Container style={{ display: isLoggedIn ? 'flex' : 'block' }}>
            {isLoggedIn ? (
              <>
                {isDesktopOrLaptop || sideBarIsVisible ? (
                  <AsideBar onSidebarShow={onSidebarShow} />
                ) : null}
                <Box>
                  <Header onSidebarShow={onSidebarShow} />
                  <Main>
                    <Suspense>
                      <Outlet />
                    </Suspense>
                  </Main>
                </Box>
              </>
            ) : (
              <Suspense>
                <Outlet />
              </Suspense>
            )}
          </Container>
        </main>
      </Wrapper>
    </>
  );
};
