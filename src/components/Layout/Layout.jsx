import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// import { MainLayout } from 'components/AppBarHeader';

import { CardWrapper } from './Layout.styled';
// import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <CardWrapper>
      {/* {isLoggedIn && <MainLayout />} */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </CardWrapper>
  );
};
