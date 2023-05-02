import styled from "styled-components";

export const GridWrapper = styled.ul`
display: grid;
grid-template-columns: repeat(7, 1fr);
border-radius: 8px;
border: 1px solid rgba(220, 227, 229, 0.5);
padding-left: 0;
margin-bottom: 14px;`;

export const CellWrapper = styled.li`
height: 50px;
background: ${props => props.theme.mainBackgroundColor};
font-family: 'InterSemiBolt';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 1.12;
text-align: center;
text-transform: uppercase;
color: ${props => props.weekend ? props.theme.accentColor : props.theme.CalendarHead};
display: flex;
align-items: center;
justify-content: center;

&:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
};

&:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
};

@media(min-width: 376px) {
    min-width: 40px;
  };

@media(min-width: 768px) {
  height: 46px;
};
`;