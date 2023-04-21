import {} from './LoginPage.styled';

import { LoginForm } from 'components/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate';

export default function LoginPage() {
  const redirectRegister = '/register';

  return (
    <div>
      <h1>
        Login Page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>

      <LoginForm />
      <AuthNavigate redirect={redirectRegister} nameLink="Log in" />
    </div>
  );
}
