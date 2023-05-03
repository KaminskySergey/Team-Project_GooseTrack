import styled from 'styled-components';
import { ReactComponent as IconAdd } from 'images/svg/addIcon.svg';
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 18px 6px 10px 18px;
  min-width: 335px;
  width: 100%;
  max-height: 432px;
  list-style: none;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  background-color: ${props => props.theme.mainBackgroundColor};
  @media (min-width: 768px) {
    min-width: 344px;
    max-height: 568px;
    padding: 18px 12px 28px 20px;
  }
`;

export const IconAddTodo = styled(IconAdd)`
  cursor: pointer;
  stroke: ${props => props.theme.mainTextColor};
  transition: all 250ms;
  transform: scale(1);

  &:hover,
  &:focus {
    stroke: ${props => props.theme.accentColor};
  }
`;
