
import {
  iconDelete,
  iconEdit,
  iconMove,
} from '../../../../../../images/svg/index';
import { Box } from './TaskToolbar.styled';

export const TaskToolbar = ({ handleTodoId,  todo, handleDeleteTodo, handleToggle}) => {
  
  const handleInfo = (todo) => {
    handleTodoId(todo)
handleToggle()
  }
  

  return (
    <Box>
      <li>
        <img src={iconDelete} alt="Delete"  onClick={() => handleDeleteTodo(todo._id)}/>
      </li>
      <li>
        <img src={iconEdit} alt="Edit"  onClick={() => handleInfo(todo)}/>
      </li>
      <li>
        <img src={iconMove} alt="Move" />
      </li>
    </Box>
  );
};
