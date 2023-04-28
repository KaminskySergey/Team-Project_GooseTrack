import { Сontainer } from './LoginPage.styled';

import { LoginForm } from 'components/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate';

export default function LoginPage() {
  const redirectRegister = '/register';

  return (
    <Сontainer>
      <LoginForm />
      <AuthNavigate redirect={redirectRegister} nameLink="Sign up" />
    </Сontainer>
  );
}
