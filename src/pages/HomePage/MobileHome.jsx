import {
  HeroHeader,
  MainContainer,
  HeroItem,
  Container,
  LogoContainer,
  NavContainer,
  LogoText,
  RedirectLinkLogin,
  RedirectLinkRegister,
} from './MobileHome.styled';

import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as LogoLogin } from '../../images/svg/IconLogin.svg';

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
        <HeroItem>основная часть</HeroItem>
      </MainContainer>
    </Container>
  );
};
