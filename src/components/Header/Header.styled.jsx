import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0, auto;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Title = styled.h2`
  font-family: 'InterBolt';
  font-size: 32px;
  line-height: 32px;
  transition: ${props => props.theme.defaultTransition};
  color: ${props => props.theme.mainTextColor};
`;
