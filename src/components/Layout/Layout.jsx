import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper, Main } from './Layout.styled';
import { useAuth } from 'hooks/useAuth';
import { Container } from './Layout.styled';

import AsideBar from '../AsideBar/AsideBar';


export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Wrapper>
        <main>
          <Container style={{ display: 'flex' }}>
            {isLoggedIn ? (
              <>
              
                <AsideBar />
                <Main>
                  <Suspense>
                    <Outlet />
                  </Suspense>
                </Main>
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
