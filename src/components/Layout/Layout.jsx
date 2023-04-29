import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper, Main, Box } from './Layout.styled';
import { useAuth } from 'hooks/useAuth';
import { Container } from './Layout.styled';

import AsideBar from '../AsideBar/AsideBar';
import { Header } from '../Header/Header';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Wrapper>
        <main>
          <Container style={{ display: isLoggedIn ? 'flex' : 'block' }}>
            {isLoggedIn ? (
              <>
                <AsideBar />
                <Box>
                  <Header />
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
