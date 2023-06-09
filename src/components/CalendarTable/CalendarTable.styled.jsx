import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const getPriorityColor = props => {
  switch (props.priority) {
    case 'low':
      return 'color: #3E85F3; background-color: #CEEEFD;';
    case 'medium':
      return 'color: #F3B249; background-color: #FCF0D4;';
    case 'high':
      return 'color: #EA3D65; background-color: #FFD2DD;';
    default:
      return 'color: #3E85F3; background-color: #FFFFFF';
  }
};

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 8px;
`;

export const CellWrapper = styled(NavLink)`
  min-width: 28px;
  background: ${props => props.theme.mainBackgroundColor};
  border: 1px solid rgba(220, 227, 229, 0.5);
  min-height: 94px;
  font-family: 'InterBolt';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  color: ${props =>
    props.iscurrentmonth === 'true'
      ? props.theme.mainTextColor
      : props.theme.mainBackgroundColor};

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }

  &:nth-child(7) {
    border-top-right-radius: 8px;
  }

  &:nth-last-child(7) {
    border-bottom-left-radius: 8px;
  }

  @media (min-width: 376px) {
    min-width: 48px;
  }

  @media (min-width: 768px) {
    min-width: 100px;
    height: 144px;
    font-size: 16px;
    line-height: 1.12;
  }

  @media (min-width: 1280px) {
    height: 135px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  flex-direction: column;
`;

export const DayWrapper = styled.div`
  padding: 10px 12px;
  font-weight: 700;
  font-family: 'InterBolt';

  @media (min-width: 768px) {
    padding: 18px 22px;
  }
`;

export const CurrentDay = styled.div`
  background: ${props => props.theme.accentColor};
  color: #fff;
  padding: 4px 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -4px -6px;

  @media (min-width: 768px) {
    padding: 4px 8px;
    margin: -4px -8px;
    border-radius: 8px;
  }
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TaskListWrapper = styled.ul`
  list-style-type: none;
  padding: 0 8px 0px 8px;
`;

export const TaskItem = styled.li`
  height: 22px;
  padding: 4px 4px 4px 8px;
  font-family: 'InterBolt';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  ${props => getPriorityColor(props)};

  @media (min-width: 768px) {
    min-width: 92px;
    height: 26px;
    padding: 4px 8px 4px 12px;
    font-size: 10px;
    line-height: 1.29;
  }

  @media (min-width: 1280px) {
    min-width: 114px;
  }
`;

export const TasksMoreLabel = styled.div`
  margin-top: auto;
  margin: auto;
  color: #3e85f3;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
`;
