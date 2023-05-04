import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import image from 'images/page/404.jpg';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #f7f6f9;
`;

const Text = styled.p`
  font-family: 'InterBolt';
  font-size: 24px;
  color: #757575;
  margin-bottom: 26px;
  text-align: center;
`;

const Link = styled(NavLink)`
  color: ${props => props.theme.accentColor};
  text-decoration: none;
  font-weight: bold;
  transition: ${props => props.theme.defaultTransition};

  &:hover {
    color: #1b54aa;
  }
`;
export default function NotFoundPage() {
  return (
    <Wrapper>
      <div style={{ maxWidth: '450px' }}>
        <img src={image} alt="404" style={{ mixBlendMode: 'multiply' }} />
      </div>
      <Text>Oops! The page you requested was not found.</Text>
      <Link to="/">Go back to homepage</Link>
    </Wrapper>
  );
}
