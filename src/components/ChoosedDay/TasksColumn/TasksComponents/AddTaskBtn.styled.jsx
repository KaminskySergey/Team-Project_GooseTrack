import styled from 'styled-components';
export const AddTaskButton = styled.button`
  font-family: 'InterSemiBolt';
  font-weight: 600;
  margin-top: 32px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: 48px;
  border: ${props => props.theme.borderAddTask};

  cursor: pointer;
  background-color: ${props => props.theme.buttonBackgroundColorAddTask};
  color: ${props => props.theme.buttonAddTaskColor};

  :hover,
  :focus {
    background-color: ${props => props.theme.buttonBackgroundColorAddTaskHover};
    color: ${props => props.theme.buttonAddTaskColorHover};
  }
`;
