import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 900px;
  /* background-color: red; */
 
  margin: 0 auto;
  max-width: 767px;
  outline: 1px solid tomato;

  @media (min-width: 768px) {
    
    max-width: 1279;
  }

  @media (min-width: 1280px) {
    max-width: 1680px;
  }
`;

export const Aside = styled.aside`
  height: 100%;
  width: 290px;
  background-color: aqua;
  padding-left: 24px;
`

