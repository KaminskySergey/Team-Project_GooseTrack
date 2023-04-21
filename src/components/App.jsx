import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/calendar"
              component={<CalendarPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
