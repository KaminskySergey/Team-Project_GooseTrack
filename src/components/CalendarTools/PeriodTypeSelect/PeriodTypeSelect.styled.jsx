import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ChooseWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
`;

export const ActivePeriod = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 149px;
  width: 76px;
  height: 34px;
  background: #cae8ff;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  border-radius: 8px 0px 0px 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: #3e85f3;
  border: none;
`;

export const NotActivePeriod = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 25px;
  gap: 149px;
  width: 76px;
  height: 34px;
  background: #e3f3ff;
  border-radius: 0px 8px 8px 0px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: #3e85f3;
  border: none;
`;
