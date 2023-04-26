import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper, Main } from './Layout.styled';
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
                <div style={{ width: '100%' }}>
                  <Header />
                  <Main>
                    <Suspense>
                      <Outlet />
                    </Suspense>
                  </Main>
                </div>
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
