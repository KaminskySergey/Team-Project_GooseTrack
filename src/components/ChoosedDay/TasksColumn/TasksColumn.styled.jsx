import styled from 'styled-components';
import { ReactComponent as IconAdd } from 'images/svg/addIcon.svg';
export const Item = styled.li`
  border-radius: 8px;
  
  padding: 18px 18px 28px 14px;
  max-width: 344px;
  width: calc((100% - 3 * 27px) / 3);
  margin: 15px;
`;


export const IconAddTodo = styled(IconAdd)`
  
  position: absolute;
  top: 27px;
  right: 25px;
  cursor: pointer;
  stroke: ${props => props.theme.mainTextColor};
  transition: all 250ms;
  transform: scale(1);
    
      &:hover, &:focus{
    stroke: ${props => props.theme.accentColor};
    transform: scale(1.1);
    
  
  }
`