import styled from 'styled-components';

// export const Wrapper = styled.div`
//   width: 100%;
//   /* margin: 0 auto; */
//   background-color: #f7f6f9;
// `;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0, auto;
  /* padding: 40px 32px 32px 32px; */
  /* background-color: rgb(247, 246, 249); */
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
  color: ${props => props.theme.mainTextColor};
`;
