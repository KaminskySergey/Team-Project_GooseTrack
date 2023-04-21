import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
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
            <RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute redirectTo="/login" component={<AccountPage />} />
          }
        />
      </Route>
    </Routes>
  );
};