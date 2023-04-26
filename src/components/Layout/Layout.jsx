import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper, Main } from './Layout.styled';
import { useAuth } from 'hooks/useAuth';
import { Container } from './Layout.styled';

import AsideBar from '../AsideBar/AsideBar';
import { Header } from '../Header/Header';
import Box from 'components/Box/Box';

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
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                  width="100%"
                  minHeight="100vh"
                  p="40px 32px 32px"
                  bg="rgb(247, 246, 249)"
                >
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
