import {} from './LoginForm.styled';

import { login } from '../../redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    console.log({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>
        Login Page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <form onSubmit={handleSubmit} style={{ outline: '1px solid black' }}>
        <label>
          Email
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
