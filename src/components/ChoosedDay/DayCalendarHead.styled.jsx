import styled from "styled-components";

export const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
border-radius: 8px;
border: 1px solid rgba(220, 227, 229, 0.5);
margin-bottom: 14px;`;

export const CellWrapper = styled.div`
min-width: 48px;
height: 50px;
background: ${props => props.theme.mainBackgroundColor};
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: ${props => props.dates ? '12px' : '16px'};
line-height: 1.12;
text-align: center;
text-transform: uppercase;
color: ${props => props.weekend ? props.theme.accentColor: props.dates ? props.theme.mainTextColor : props.theme.asideBarTitle};
display: flex;
align-items: center;
justify-content: center;
`;

export const CurrentDay = styled.div`
background: ${props => props.theme.accentColor};
color:${props => props.theme.mainTextColor};

padding: 4px 6px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;

@media(min-width: 768px) {
    padding: 4px 8px;
    border-radius: 8px;
  }`;