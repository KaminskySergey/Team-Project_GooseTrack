import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100vh;
  padding: 40px 32px 32px;
  transition: ${props => props.theme.defaultTransition};
  background-color: ${props => props.theme.mainBackgroundColor};
`;

export const Wrapper = styled.div`
  max-width: 1680px;
  margin: 0 auto;
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex-grow: 1;
  padding-top: 32px;
`;
