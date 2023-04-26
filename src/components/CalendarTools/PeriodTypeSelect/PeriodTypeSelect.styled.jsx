import styled from "styled-components";

export const ChooseWrapper = styled.div`
margin-bottom: 24px;
display: flex`;

export const ActivePeriod = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 149px;
width: 76px;
height: 34px;
background: #CAE8FF;
border-right: 1px solid rgba(62, 133, 243, 0.2);
border-radius: 8px 0px 0px 8px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.29;
text-align: center;
color: #3E85F3;
border: none`;

export const NotActivePeriod = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 25px;
gap: 149px;
width: 76px;
height: 34px;
background: #E3F3FF;
border-radius: 0px 8px 8px 0px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.29;
text-align: center;
color: #3E85F3;
border: none;`;