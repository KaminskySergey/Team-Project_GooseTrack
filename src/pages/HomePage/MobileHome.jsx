import {
  HeroHeader,
  MainContainer,
  AboutContainer,
  Container,
  LogoContainer,
  NavContainer,
  LogoText,
  RedirectLinkLogin,
  RedirectLinkRegister,
  ImageContainer,
} from './MobileHome.styled';

import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as LogoLogin } from '../../images/svg/IconLogin.svg';
import ImageCalendar from 'images/page/Mobile/calendarMobile.jpg';
import ImageSidebar from 'images/page/Mobile/sidebarMobile.png';
import ImageAllinOne from 'images/page/Mobile/allinoneMobile.png';

export const MobileHome = () => {
  const redirectLogin = '/login';
  const redirectRegister = '/register';
  return (
    <Container>
      <HeroHeader>
        <LogoContainer>
          <Logo style={{ width: '142px', height: '142px' }} />
          <LogoText>
            G<span style={{ fontStyle: 'italic' }}>oo</span>seTrack
          </LogoText>
        </LogoContainer>

        <NavContainer>
          <RedirectLinkLogin to={redirectLogin}>
            Log in{' '}
            <LogoLogin
              style={{ width: '13px', height: '13px', marginLeft: '8px' }}
            />
          </RedirectLinkLogin>
          <RedirectLinkRegister to={redirectRegister}>
            Sign up
          </RedirectLinkRegister>
        </NavContainer>
      </HeroHeader>

      <MainContainer>
        <AboutContainer>
          <p>1.</p>
          <h2>Callendar view</h2>
          <p>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </p>
          <ImageContainer>
            <img
              src={ImageCalendar}
              alt="Callendar view"
              width="335"
              height="457"
            />
          </ImageContainer>
        </AboutContainer>
        <AboutContainer>
          <p>2.</p>
          <h2>Sidebar</h2>
          <p>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </p>
          <ImageContainer>
            <img
              src={ImageSidebar}
              alt="Callendar view"
              width="335"
              height="457"
            />
          </ImageContainer>
        </AboutContainer>
        <AboutContainer>
          <p>3.</p>
          <h2>All in one</h2>
          <p>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </p>
          <ImageContainer>
            <img
              src={ImageAllinOne}
              alt="Callendar view"
              width="335"
              height="457"
            />
          </ImageContainer>
        </AboutContainer>
      </MainContainer>
    </Container>
  );
};
