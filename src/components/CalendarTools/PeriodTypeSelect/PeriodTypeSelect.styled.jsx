import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ChooseWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
`;

export const ChangePeriod = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 25px;
  gap: 149px;
  width: 76px;
  height: 34px;
  font-family: 'InterNormal';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: #3e85f3;
  border: none;

  :first-child {
    border-radius: 8px 0px 0px 8px;
    padding: 8px 16px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
    background: ${props =>
      props.ischoosedmonth === 'false' ? '#e3f3ff' : '#CAE8FF'};
  }

  :last-child {
    border-radius: 0px 8px 8px 0px;
    background: ${props =>
      props.ischoosedmonth === 'true' ? '#e3f3ff' : '#CAE8FF'};
  }
`;
