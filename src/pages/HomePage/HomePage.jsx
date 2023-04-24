import {} from 'react-router-dom';

import {} from './HomePage.styled';
import { AuthNavigate } from 'components/AuthNavigate';

export default function HomePage() {
  const redirectLogin = '/login';
  const redirectRegister = '/register';

  return (
    <div>
      <h1>
        Team-Project_GooseTrack manager HOME page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <nav>
        <AuthNavigate redirect={redirectLogin} nameLink="Log in" />
        <AuthNavigate redirect={redirectRegister} nameLink="Sing up" />
      </nav>
    </div>
  );
}
