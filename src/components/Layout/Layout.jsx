import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';



import {  Wrapper, Main } from './Layout.styled';
// import { useAuth } from 'hooks/useAuth';
import { Container } from './Layout.styled';

import  AsideBar  from '../AsideBar/AsideBar';






export const Layout = () => {


  return (
    <>
    <Wrapper>
    <main>
      <Container style={{display: 'flex'}}>
        <AsideBar/>
        
        <Main>
        
        
        <Suspense>
          <Outlet />
        </Suspense>
        </Main>
      </Container>
    </main>

    </Wrapper>
    </>
  );
};
