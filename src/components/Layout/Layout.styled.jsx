import styled from 'styled-components';

export const Go = styled.div`
    max-width: 1680px;
    margin: 0 auto;
    
`;

export const Main = styled.main`
  
`

export const Container = styled.div`
 
 
 outline: 1px solid tomato;
 height: 900px;
 width: 100%;
`;

export const Aside = styled.aside`
  height: 100%;
  width: 290px;
  background-color: '#FFFFFF';
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
  p {
    font-family: InterSemiBoltMinSize;
    font-size: 14px;
line-height: 17px;
margin-bottom: 32px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`

border-radius: 8px;
  width: 241px;
  height: 50px;
  /* padding: 16px 20px; */
  color: #84828A;
  &:not(:last-child){
    margin-bottom: 16px;
  }
a {
  font-size: 16px;
line-height: 19px;
font-family: 'InterSemiBolt';
width: 100%;
height: 100%;
display: block;
padding: 16px 20px;
border-radius: 8px;
transition: all 250ms;
&:hover, &:focus {
  background: #E3F3FF;
color: #3E85F3;
}
}
`

