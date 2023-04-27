import {} from './RegisterPage.styled';

import { RegisterForm } from 'components/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate';

export default function RegisterPage() {
  const redirectLogin = '/login';

  return (
    <div>
      <RegisterForm />
      <AuthNavigate redirect={redirectLogin} nameLink="Log in" />
    </div>
  );
}
