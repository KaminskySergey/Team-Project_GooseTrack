import {} from 'react-router-dom';

import {} from './HomePage.styled';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

import { useResponce } from 'hooks/responce';

import { DesktopHome } from './DesktopHome';
import { TabletHome } from './TabletHome';
import { MobileHome } from './MobileHome';

export default function HomePage() {
  const { isDesktopOrLaptop, isTablet, isMobile } = useResponce();

  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(register({ name, email, password }));

  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };
  return (
    <>
      {isDesktopOrLaptop && <DesktopHome />}
      {isTablet && <TabletHome />}
      {isMobile && <MobileHome />}

      {/* <h1>
        Team-Project_GooseTrack manager HOME page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1> */}

      {/* <form onSubmit={handleSubmit} style={{ outline: '1px solid black' }}>
        <label>
          Name
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
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
      </form> */}
    </>
  );
}
