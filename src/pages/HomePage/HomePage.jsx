import { NavLink } from 'react-router-dom';

import {} from './HomePage.styled';

export default function HomePage() {
  return (
    <div>
      <h1>
        Team-Project_GooseTrack manager HOME page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <nav>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/register">Sing up</NavLink>
      </nav>
    </div>
  );
}
