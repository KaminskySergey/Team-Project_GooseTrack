import { Сontainer, ImageContainer, Text } from './LoginPage.styled';

import { LoginForm } from 'components/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate';
import { ReactComponent as Rocket } from 'images/svg/rocket.svg';
import { ReactComponent as Message } from 'images/svg/messageLogin.svg';

export default function LoginPage() {
  const redirectRegister = '/register';

  return (
    <Сontainer>
      <LoginForm />
      <AuthNavigate redirect={redirectRegister} nameLink="Sign up" />
      <ImageContainer>
        <Text>
          Quickly
          <span style={{ fontStyle: 'italic', color: '#3E85F3' }}>come in</span>
          and write down your tasks for the day!
        </Text>
        <Message
          style={{
            position: 'absolute',
            top: '0px',
            right: '57px',
          }}
        />
        <Rocket style={{ position: 'absolute', bottom: '0px', right: '0px' }} />
      </ImageContainer>
    </Сontainer>
  );
}
