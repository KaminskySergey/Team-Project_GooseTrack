import { Сontainer } from './RegisterPage.styled';

import { RegisterForm } from 'components/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate';

export default function RegisterPage() {
  const redirectLogin = '/login';

  return (
    <Сontainer>
      <RegisterForm />
      <AuthNavigate redirect={redirectLogin} nameLink="Log in" />
    </Сontainer>
  );
}
