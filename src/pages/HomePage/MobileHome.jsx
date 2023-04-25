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
import ImageCalendar from 'images/page/calendar.jpg';

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
        <AboutContainer>2.</AboutContainer>
        <AboutContainer>3.</AboutContainer>
      </MainContainer>
    </Container>
  );
};
