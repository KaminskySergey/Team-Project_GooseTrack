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
  BenefitNumber,
  AdvantageColor,
  AdvantageItem,
  AboutText,
  Advantage,
  ReverseContaiber,
} from './TabletHome.styled';

import { ReactComponent as Logo } from 'images/svg/logo.svg';
import { ReactComponent as LogoLogin } from 'images/svg/IconLogin.svg';
import ImageCalendar from 'images/page/Tablet/calendarTablet.png';
import ImageCalendar2x from 'images/page/Tablet/calendarTablet@2x.png';
import ImageSidebar from 'images/page/Tablet/sidebarTablet.png';
import ImageSidebar2x from 'images/page/Tablet/sidebarTablet@2x.png';
import ImageAllinOne from 'images/page/Tablet/allinoneTablet.png';
import ImageAllinOne2x from 'images/page/Tablet/allinoneTablet@2x.png';

export const TabletHome = () => {
  const redirectLogin = '/login';
  const redirectRegister = '/register';
  return (
    <Container>
      <HeroHeader>
        <LogoContainer>
          <Logo style={{ width: '150px', height: '150px' }} />
          <LogoText>
            G<span style={{ fontStyle: 'italic' }}>oo</span>seTrack
          </LogoText>
        </LogoContainer>

        <NavContainer>
          <RedirectLinkRegister to={redirectRegister}>
            Sign up
          </RedirectLinkRegister>
          <RedirectLinkLogin to={redirectLogin}>
            Log in{' '}
            <LogoLogin
              style={{ width: '13px', height: '13px', marginLeft: '8px' }}
            />
          </RedirectLinkLogin>
        </NavContainer>
      </HeroHeader>

      <MainContainer>
        <AboutContainer>
          <BenefitNumber>1.</BenefitNumber>
          <AdvantageColor>Calendar</AdvantageColor>
          <AdvantageItem>view</AdvantageItem>
          <AboutText>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </AboutText>
          <ImageContainer>
            <img
              srcset={`${ImageCalendar} 1x, ${ImageCalendar2x} 2x`}
              src={ImageCalendar}
              alt="Callendar view"
              width="704"
              height="700"
            />
          </ImageContainer>
        </AboutContainer>
        <AboutContainer>
          <ReverseContaiber>
            <BenefitNumber>2.</BenefitNumber>
            <Advantage>Sidebar</Advantage>
            <AboutText>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </AboutText>
          </ReverseContaiber>
          <ImageContainer>
            <img
              srcset={`${ImageSidebar} 1x, ${ImageSidebar2x} 2x`}
              src={ImageSidebar}
              alt="Callendar view"
              width="704"
              height="700"
            />
          </ImageContainer>
        </AboutContainer>
        <AboutContainer>
          <BenefitNumber>3.</BenefitNumber>
          <AdvantageColor>All in</AdvantageColor>
          <AdvantageItem>one</AdvantageItem>
          <AboutText>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </AboutText>
          <ImageContainer>
            <img
              srcset={`${ImageAllinOne} 1x, ${ImageAllinOne2x} 2x`}
              src={ImageAllinOne}
              alt="Callendar view"
              width="704"
              height="700"
            />
          </ImageContainer>
        </AboutContainer>
      </MainContainer>
    </Container>
  );
};
