import {} from './RegisterPage.styled';

import { RegisterForm } from 'components/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate';

export default function RegisterPage() {
  const redirectLogin = '/login';

  return (
    <div>
      <h1>
        Register Page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <RegisterForm />
      <AuthNavigate redirect={redirectLogin} nameLink="Log in" />
    </div>
  );
}
