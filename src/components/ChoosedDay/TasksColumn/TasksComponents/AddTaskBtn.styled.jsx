import styled from 'styled-components';
export const AddTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: 48px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.buttonBackgroundColor};
  color: ${props => props.theme.buttontextColor};
`;
