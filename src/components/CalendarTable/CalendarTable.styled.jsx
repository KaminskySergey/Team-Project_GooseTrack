import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
border-radius: 8px;`;

export const CellWrapper = styled(NavLink)`
min-width: 48px;
min-height: 68px;
background: #FFFFFF;
border: 1px solid rgba(220, 227, 229, 0.5);
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 1.17;
color: ${props => props.iscurrentmonth === 'true' ? '#343434' : '#fff'};

@media(min-width: 768px) {
    min-width: 100px;
    height: 104px;
    font-family: 'Inter';
    font-size: 16px;
    line-height: 1.12;
  };

  @media(min-width: 1280px) {
    min-width: 155px;
    height: 125px;
    font-family: 'Inter';
  }
`;

export const RowInCell = styled.div`
display: flex;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'}`;

export const DayWrapper = styled.div`
padding: 10px 12px;

@media(min-width: 768px) {
    padding: 18px 22px;
  }`;

export const CurrentDay = styled.div`
background: #3E85F3;
color: #fff;
padding: 4px 6px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
margin: -4px -6px;

@media(min-width: 768px) {
    padding: 4px 8px;
    margin: -4px -8px;
    border-radius: 8px;
  }`;

export const ShowDayWrapper = styled.div`
display: flex;
justify-content: flex-end;`;

