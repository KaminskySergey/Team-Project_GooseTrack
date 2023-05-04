import styled from 'styled-components';
import { ReactComponent as IconAdd } from 'images/svg/addIcon.svg';

export const AddTaskButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const IconAddTodo = styled(IconAdd)`
  height: 22px;
  width: 22px;
  stroke: ${props => props.theme.mainTextColor};
  transition: ${props => props.theme.defaultTransition};

  &:hover,
  &:focus {
    stroke: ${props => props.theme.accentColor};
  }

  @media (min-width: 768px) {
    height: 24px;
    width: 24px;
  }
`;
