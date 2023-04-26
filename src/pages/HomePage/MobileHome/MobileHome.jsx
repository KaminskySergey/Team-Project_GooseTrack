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
  AdvantageNumber,
  Advantage,
  AdvantageColor,
  AdvantageItem,
  AboutText,
} from './MobileHome.styled';

import { ReactComponent as Logo } from 'images/svg/logo.svg';
import { ReactComponent as LogoLogin } from 'images/svg/IconLogin.svg';
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
          <AdvantageNumber>1.</AdvantageNumber>
          <AdvantageColor>Calendar</AdvantageColor>
          <AdvantageItem>view</AdvantageItem>
          <AboutText>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </AboutText>
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
          <AdvantageNumber>2.</AdvantageNumber>
          <Advantage>Sidebar</Advantage>
          <AboutText>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </AboutText>
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
          <AdvantageNumber>3.</AdvantageNumber>
          <AdvantageColor>All in</AdvantageColor>
          <AdvantageItem>one</AdvantageItem>
          <AboutText>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </AboutText>
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
