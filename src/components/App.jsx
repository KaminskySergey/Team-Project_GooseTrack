import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refresh } from 'redux/auth/authOperations';

import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme/theme';
import { selectIsTheme } from 'redux/theme/selectors';
import { ChoosedDay } from './ChoosedDay/ChoosedDay';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const isTheme = useSelector(selectIsTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isTheme === true ? theme.dark : theme.light}>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/account"
                  component={<HomePage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/calendar"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute redirectTo="/" component={<CalendarPage />} />
              }
            >
              <Route path="month" element={<ChoosedDay />} />
              <Route path="day" element={<ChoosedDay />} />
            </Route>
            <Route
              path="/account"
              element={
                <PrivateRoute redirectTo="/" component={<AccountPage />} />
              }
            />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};
